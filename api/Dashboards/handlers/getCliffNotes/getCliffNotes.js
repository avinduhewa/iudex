'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getCliffNotes = (event, context, callback) => {

  const data = JSON.parse(event.body);

  initDB(db => {
    const USERS = db.collection('Users');

    USERS.findOne({ email: data.email },
      { $set: { notes: data.notes } })
      .then(userData => {
        console.log(userData);
        return returnData({ status: 200, data: userData.notes }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
