'use strict';

const database = require('../../lib/database');
const returnData = require('../../lib/return').returnData;

module.exports.hello = (event, context, callback) => {
  const data = event.queryStringParameters;
  database.initDB(db => {

    const DASHBOARDS = db.collection('Dashboards');

    DASHBOARDS.update(
      { _id: database.objectID(data._id) },
      { $set: data.update })
      .then(result => {
        return returnData({ status: 200, data: result });
      })
      .catch(err => returnData({ status: 400, data: err }, context))
  })
};
