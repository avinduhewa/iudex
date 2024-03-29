'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getTopDelegates = (event, context, callback) => {
  const data = event.queryStringParameters;
  console.log(data);
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        console.log('1',comData);
        const countryList = helper.finalizeCommitteePoints(comData);
        console.log('2',countryList);
        const delegates = countryList.sort(function (a, b) {
          return b.totalPoints - a.totalPoints;
        })
        if (delegates.length > 10) delegates.length = 10;

        return returnData({ status: 200, data: delegates }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
