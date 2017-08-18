'use strict';

const returnData = require('../../lib/return').returnData;
const helper = require('./helper');
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getTopDelegates = (event, context, callback) => {
  const data = event.queryStringParameters;

  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        const countryList = helper.finalizeCommitteePoints(comData);
        return returnData({ status: 200, data: countryList }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
