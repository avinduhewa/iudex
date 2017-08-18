'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.addPoints = (event, context, callback) => {

  const data = JSON.parse(event.body);

  initDB(db => {
    const com = db.collection('Committees');

    com.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        if (comData.admins.indexOf(data.email) > -1) {
          for (let i = 0; i < comData.countries.length; i++) {
            if (data.country === comData.countries[i].name) {
              if (data.category === 'fps' && comData.countries[i].points[data.position][data.category] > -1) {
                return returnData({ status: 200, data: "User has already awarded points for FPS" }, context);
              }
              comData.countries[i].points[data.position][data.category] += data.points;
              comData.logs.push({
                timestamp: Math.floor(Date.now() / 1000),
                chair: data.chair,
                country: data.country,
                category: data.category,
                points: data.points
              });
              break;
            }
          }
          return com.findOneAndUpdate(
            { _id: ObjectId(data.committee) },
            { $set: comData }
          );
        } else {
          return returnData({ status: 200, data: "User does not have permission to add points" }, context);
        }
      })
      .then(comReturnData => {
        console.log(comReturnData);
        return returnData({ status: 200, data: comReturnData.value }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
