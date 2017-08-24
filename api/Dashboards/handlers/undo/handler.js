'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.undo = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        const action = helper.getLastUserAction(comData, data);
        const updatedCommittee = helper.updateCommittee(comData, action, data);
        return COMMITTEE.findOneAndUpdate(
          { _id: ObjectId(data.committee) },
          { $set: comData }
        );
      })
      .then(comUpdate => {
        console.log('here');
        return returnData({ status: 200, data: { success: true, message: 'Undo Success' } }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};

