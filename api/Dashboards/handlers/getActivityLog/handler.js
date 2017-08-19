'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getActivityLog = (event, context, callback) => {
  const data = event.queryStringParameters;

  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        return returnData({ status: 200, data: comData.logs }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};

module.exports.normalizeCommittee = (comData) => {
  for (let x in comData.countries){
    delete comData.countries[x].points;
  }
  return comData;
}