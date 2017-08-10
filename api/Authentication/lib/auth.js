'use strict';

var Promise = require('bluebird'),
  helper = require('./helper'),
  AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-southeast-2' });


module.exports.signup = (data, context, event) => {
  if (!data.email) {
    return context.fail("Error: email is missing.");
  }
  var User = {
    email: data.email.toLowerCase(),
    name: data.name,
    verified: false,
    companyName: data.companyName,
    clearPassword: data.password
  };
  if (data.type == 'invite') {
    User.verified = true;
    helper.createUser(User).then(status => {
      context.succeed(status);
    }).catch(err => {
      context.fail("Error: " + err);
    });
  } else {
    verify(User, context, function (err, data) {
      console.log(err, data);
      helper.createUser(User).then(status => {
        context.succeed(status);
      }).catch(err => {
        context.fail("Error: " + err);
      });
    });
  }
};

module.exports.login = (data, context, event) => {
  if (!(data.email && data.password)) {
    return context.fail("Error: missing login parameters.");
  }
  var email = data.email.toLowerCase();
  var clearPassword = data.password;

  var loginUser = helper.getUser(email),
    verifyUser = loginUser.then(user => {
      return helper.computeHash(clearPassword, user.salt);
    });

  return Promise.join(loginUser, verifyUser, function (user, hash) {
    var correctHash = user.hash;
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

var verify = function (data, context, cb) {
  var ses = new AWS.SES();
  var ses_mail = "From: 'Maturify.com' <maturify@gmail.com>\n"
    + "To: " + data.email + "\n"
    + "Subject: Maturify Email Verification\n"
    + "MIME-Version: 1.0\n"
    + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n"
    + "--NextPart\n"
    + "Content-Type: text/html; charset=us-ascii\n\n"
    + "<h2>Hello,</h2><p>Welcome to Maturify.<br>Please click the link below to verify your email address"
    + "<a href=\"https://app.maturify.com/login/" + data.email + "\"> link text </a>";
  var paramsMail = {
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
    console.log(true);
    return context.done(null, { login: true });
  } else {
    console.log(false);
    return context.done(null, { login: false });
  }
}