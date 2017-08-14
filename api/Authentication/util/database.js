'use strict';
var Promise = require('bluebird');
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

module.exports.getUser = (email) => {
  dbConnect((db) => {
    const users = db.collection('Users');
    return users.findOne({
      email: email,
      verified: true
    });
  });
};

module.exports.putUser = (user) => {
  dbConnect((db) => {
    const users = db.collection('Users');
    return users.insertOne(user);
  });
}

module.exports.confirmUser = (userEmail) => {
  dbConnect((db) => {
    const users = db.collection('Users');
    return users.updateOne(
      { email: userEmail},
      { $set: {
        verified :true
      }}
    );
  });
}