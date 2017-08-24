'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.vote = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        console.log(comData);
        const newData = this.updateCountries(comData, data);
        return COMMITTEE.findOne({ _id: ObjectId(data.committee) }
          , { $set: newData });
      })
      .then(returnData => {
        return returnData({ status: 200, data: comData.value }, context);        
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};

module.exports.updateCountries = (comData, data) => {
  for (let x in comData.countries) {
    const country = comData.countries[x];
    if (country.name === data.nominee) {
      country.votes.push(data.voter);
      break;
    }
  }
  return comData;
}

