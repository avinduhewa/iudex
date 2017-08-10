'use strict';
var Promise = require('bluebird');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://admin:password@ds013619.mlab.com:13619/identity_provider';
var userTable = 'mongodb://admin:password@ds139197.mlab.com:39197/maturify';

function dbConnect(cb) {
  MongoClient.connect(userTable, function (err, db) {
    if (err) {
      return cb(err);
    } else {
      return cb(db);
    }
  });
};

module.exports.getUser = function (email) {
  return new Promise(function (resolve, reject) {
    dbConnect(function (db) {
      var users = db.collection('user');
      users.find({
        email: email,
        verified: true
      }).toArray(function (err, result) {
        if (err) {
          return reject(err);
        } else {
          return resolve(result[0]);
        }
      })
    });
  })
};

module.exports.putUser = function (user) {
  user.profilePicture = "https://s3-us-west-2.amazonaws.com/maturify-resources/images/default-user.png";
  return new Promise(function (resolve, reject) {
    dbConnect(function (db) {
      var users = db.collection('user');
      users.update(
        {
          email: user.email
        },
        user,
        {
          'new': true,
          'upsert': true

        }).then(function (data) {
          if (data.result.ok == 1) {
            users.find({ email: user.email }).toArray(function (err, result) {
              if (err) {
                return reject(err);
              } else {
                var userId = result[0]._id;
                var organisation = db.collection('organisations');
                organisation.find({ emailDomain: user.email.split("@")[1] })
                  .toArray(function (err, organisationData) {
                    if (err) {
                      return reject(err);
                    } else {
                      if (organisationData.length >= 1) {
                        var userExists = false;
                        for (let user of organisationData[0].userList) {
                          if (user.toString() === userId.toString()) {
                            userExists = true;
                          }
                        }
                        if (userExists === true) {
                          return resolve(null, { success: true });
                        } else {
                          organisationData[0].userList.push(userId);
                          organisation.update(
                            { emailDomain: user.email.split("@")[1] },
                            organisationData[0],
                            { 'new': true, 'upsert': true }
                          ).then(function (data) {
                            return resolve(null, { success: true });
                          });
                        }
                      } else {
                        organisation.update(
                          { emailDomain: user.email.split("@")[1] },
                          {
                            name: user.companyName,
                            emailDomain: user.email.split("@")[1],
                            accountType: "free",
                            teamList: [],
                            modelList: [],
                            userList: [userId]
                          },
                          { 'new': true, 'upsert': true }
                        ).then(function (data) {
                          return resolve(null, { success: true });
                        });
                      }
                    }
                  })
              }
            })
          } else {
            return reject({ registered: false, message: "failed to register user" });
          }
        })
    });
  })
}

module.exports.confirmUser = function (userEmail) {
  return new Promise(function (resolve, reject) {
    dbConnect(function (db) {
      var users = db.collection('user');
      users.find({ email: userEmail }).toArray(function (err, data) {
        if (err) {
          return reject(err);
        } else {
          var userData = data[0];
          userData.verified = true;
          users.update({
            email: userEmail
          }, userData, {
              'new': true, 'upsert': true
            }).then(function (data) {
              return resolve(null, { success: true })
            })
        }
      })
    });
  })
}