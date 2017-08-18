'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getOverallPoints = (event, context, callback) => {
  const data = event.queryStringParameters;

  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        const countryList = helper.finalizeCommitteePoints(comData);
        const delegates = countryList.sort(function (a, b) {
          return b.totalPoints - a.totalPoints;
        })
        return returnData({ status: 200, data: delegates }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
