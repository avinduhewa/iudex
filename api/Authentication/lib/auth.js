'use strict';

const Promise = require('bluebird'),
  helper = require('./helper'),
  AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-southeast-2' });


module.exports.signup = (data, context, event) => {
  if (!data.email) {
    return context.fail("Error: email is missing.");
  }
  const User = {
    email: data.email.toLowerCase(),
    name: data.name,
    verified: false,
    clearPassword: data.password
  };
  sendVerificationEmail(User, context, (err, data) => {
    helper.createUser(User).then(status => {
      context.succeed(status);
    }).catch(err => {
      context.fail("Error: " + err);
    });
  });
};

module.exports.login = (data, context, event) => {
  if (!(data.email && data.password)) {
    return context.fail("Error: missing login parameters.");
  }
  const email = data.email.toLowerCase();
  const clearPassword = data.password;

  const loginUser = helper.getUser(email),
    verifyUser = loginUser.then(user => {
      return helper.computeHash(clearPassword, user.salt);
    });

  return Promise.join(loginUser, verifyUser, function (user, hash) {
    const correctHash = user.hash;
    if (hash.toString('base64') === correctHash) {
      return helper.createJWT(email).then(token => {
        context.succeed({
          login: true,
          token: token
        });
      });
    } else {
      context.fail({
        login: false,
        message: 'login failed.'
      });
    }
  }).catch(err => {
    context.fail("Error: " + err);
  });
};

const sendVerificationEmail = function (data, context, cb) {
  //change email template for auth
  const ses = new AWS.SES();
  const ses_mail = "From: 'Maturify.com' <maturify@gmail.com>\n"
    + "To: " + data.email + "\n"
    + "Subject: Maturify Email Verification\n"
    + "MIME-Version: 1.0\n"
    + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n"
    + "--NextPart\n"
    + "Content-Type: text/html; charset=us-ascii\n\n"
    + "<h2>Hello,</h2><p>Welcome to Maturify.<br>Please click the link below to verify your email address"
    + "<a href=\"https://app.maturify.com/login/" + data.email + "\"> link text </a>";
  const paramsMail = {
    RawMessage: {
      Data: new Buffer(ses_mail)
    },
    Destinations: [data.email],
    Source: "'Maturify.com' <maturify@gmail.com>'"
  };
  ses.sendRawEmail(paramsMail, function (err, data) {
    if (err) {
      return cb(null, { message: "unable inviting user", error: err });
    }
    else {
      return cb(null, data);
    }
  });
}


module.exports.confirmUser = (data, context) => {
  helper.confirmUser(data, context);
};

module.exports.checkUser = (data, context) => {
  let decode = helper.decodeToken(data.token);
  if (data.email == decode.email) {
    return context.done(null, { login: true });
  } else {
    return context.done(null, { login: false });
  }
}