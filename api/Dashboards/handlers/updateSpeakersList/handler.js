'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.updateSpeakersList = (event, context, callback) => {
  const data = JSON.parse(event.body);
  
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOneAndUpdate({ _id: ObjectId(data.committee) },
      { $set: { speakersList: data.speakersList } })
      .then(comData => {
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