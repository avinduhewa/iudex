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
    return COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        const countryData = this.mergerPointsAndRollCall(data.delegates, comData);
        return COMMITTEE.findOneAndUpdate({ _id: ObjectId(data.committee) },
          { $set: { countries: countryData.countries } });
      })
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

module.exports.mergerPointsAndRollCall = (delegatesData, comData) => {
  for(let x in comData.countries) {
    const country = comData.countries[x];
    for(let countryObject of delegatesData) {
      if (country.name === countryObject.name) {
        country.rollcall = countryObject.rollcall;
        break;
      }
    }
  }
  return comData;
}