'use strict';

const mongodb = require('mongodb');

const connectionString = 'mongodb://admin:password@ds135830.mlab.com:35830/iudex';
const MongoClient = mongodb.MongoClient;

// export commonly used attributes;
exports.objectID = mongodb.ObjectID;

module.exports.initDB = (callback) => {
  const options = {
    reconnectTries: 60,
    reconnectInterval: 100,
  };
  MongoClient.connect(connectionString, options, (err, db) => {
    if (err) return callback(err);
    return callback(db);
  });
};


module.exports.initNYMUNdb = (callback) => {
  const options = {
    reconnectTries: 60,
    reconnectInterval: 100,
  };
  MongoClient.connect('mongodb://admin:password@ds153682.mlab.com:53682/nymun', options, (err, db) => {
    if (err) return callback(err);
    return callback(db);
  });
}