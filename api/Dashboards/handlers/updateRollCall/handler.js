'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.updateRollCall = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOneAndUpdate({ _id: ObjectId(data.committee) },
      { $set: { countries: data.delegates } })
      .then(comData => {
        console.log(comData);
        return returnData({ status: 200, data: comData.value }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};

module.exports.normalizeCommittee = (comData) => {
  for (let x in comData.countries) {
    delete comData.countries[x].points;
  }
  return comData;
}