'use strict';
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var connectionString = 'mongodb://admin:password@ds135830.mlab.com:35830/iudex';

function dbConnect(cb) {
  MongoClient.connect(connectionString, (err, db) => {
    if (err) {
      return cb(err);
    } else {
      return cb(db);
    }
  });
};

function returnData(data, context) {
  console.log('1', data);
  return context.succeed({
    statusCode: data.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  });
};


module.exports.login = (data, context, event) => {
  console.log(data);
  if (!(data.email && data.password)) {
    return returnData({ status: 402, data: "Error: missing login parameters." }, context);
  }
  const email = data.email.toLowerCase();
  const password = data.password;

  dbConnect((db) => {
    const users = db.collection('Users');
    users.findOne({email})
    .then(user => {
      console.log(user);
      db.close();
      if (user.email === email && user.password === password) {
        delete user.password;
        return returnData({ status: 200, data: { login: true, admin: false, user } }, context);
      }else{
        delete user.password;
        return returnData({ status: 200, data: { login: false, admin: false, user } }, context);
      }
    })
    .catch(err => returnData({ status: 200, data: { login: false, admin: false, err } }, context));
  });

};
