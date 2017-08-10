'use strict';

const auth = require('./lib/auth');

module.exports.auth = (event, context, callback) => {
  if(event.source === 'aws.events') return returnData({status:200, data: {} }, context);
  
  const data = JSON.parse(event.body).data;
  const path = JSON.parse(event.body).path;

  switch (path) {
    case '/login':
      auth.login(data, context);
      break;
    case '/signup':
      auth.signup(data, context);
      break;
    case '/confirmUser':
      auth.confirmUser(data, context);
      break;
    case '/checkUser':
      auth.checkUser(data, context);
      break;
    default:
      return returnData({ status: 400, data: { message: 'invalid API path' } }, context);
  }

};

function returnData(data, context) {
  context.succeed({
    statusCode: data.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  });
};