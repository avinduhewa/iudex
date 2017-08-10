'use strict';

const database = require('../../lib/database');
const returnData = require('../../lib/return').returnData;

module.exports.hello = (event, context, callback) => {
  const data = JSON.parse(event.body);
  database.initDB(db => {

    const USERS = db.collection('Users');
    const DASHBOARDS = db.collection('Dashboards');

    data.dashboard._id = new database.objectID();
    DASHBOARDS.insertOne(data.dashboard)
      .then(result => {
        return USERS.update(
          { email: data.email },
          { $push: { dashboards: data.dashboard._id } });
      })
      .then(result => {
        return returnData({ status: 200, data: data.dashboard });
      })
      .catch(err => returnData({ status: 400, data: err }, context))
  })
};
