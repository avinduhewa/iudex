'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initNYMUNdb;
const ObjectId = db.objectID;

module.exports.attendance = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data); 
  initDB(db => {
    const delegates = db.collection('Delegates');

    delegates.findOneAndUpdate({ _id: ObjectId(data._id) },
      { $set: { 'attendance.day1': true } })
      .then(updateReturn => {
        return returnData({ status: 200, data: updateReturn.value }, context);
      })
      .catch(err => returnData({ status: 400, data: err }, context))
  })
};
