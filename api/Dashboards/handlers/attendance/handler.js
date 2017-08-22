'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.attendance = (event, context, callback) => {

  return returnData({ status: 200, data: {} }, context);

};
