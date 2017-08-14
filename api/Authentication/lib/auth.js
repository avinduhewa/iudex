'use strict';

const Promise = require('bluebird'),
  helper = require('./helper'),
  AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-southeast-2' });

function returnData(data, context) {
  return context.succeed({
    statusCode: data.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  });
};

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
      return returnData({ status: 200, data: status }, context);
    }).catch(err => {
      return returnData({ status: 402, data: err }, context);
    });
  });
};

module.exports.login = (data, context, event) => {
  if (!(data.email && data.password)) {
    return returnData({ status: 402, data: err }, context);
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
        return returnData({
          status: 200,
          data: {
            login: true,
            token: token
          }
        }, context);
      });
    } else {

      return returnData({
        status: 402,
        data: {
          login: false,
          message: 'login failed.'
        }
      }, context);

    }
  }).catch(err => {
    return returnData({ status: 402, data: err }, context);
  });
};

const sendVerificationEmail = function (data, context, cb) {
  //change email template for auth
  const ses = new AWS.SES({ region: 'us-east-1' });
  const ses_mail = "From: 'iudex.com' <admin@nymunsl.org>\n"
    + "To: " + data.email + "\n"
    + "Subject: IUDEX Email Verification\n"
    + "MIME-Version: 1.0\n"
    + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n"
    + "--NextPart\n"
    + "Content-Type: text/html; charset=us-ascii\n\n"
    + "<h2>Hello,</h2><p>Welcome to IUDEX.<br>Please click the link below to verify your email address";
  // + "<a href=\"https://app.maturify.com/login/" + data.email + "\"> link text </a>";
  const paramsMail = {
    RawMessage: {
      Data: new Buffer(ses_mail)
    },
    Destinations: [data.email],
    Source: "'iudex.com' <admin@nymunsl.org>'"
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
    return returnData({ status: 200, data: { login: true } }, context);
    
  } else {
    return returnData({ status: 402, data: { login: false } }, context);
    
  }
}