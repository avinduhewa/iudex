'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.getTopDelegates = (event, context, callback) => {
  const data = event.queryStringParameters;

  initDB(db => {
    const com = db.collection('Committees');

    com.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        const delegates = comData.countries.sort(function (a, b) {
          return b.points - a.points;
        })
        if (delegates.length > 10) delegates.length = 10;

        return returnData({ status: 200, data: delegates }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
