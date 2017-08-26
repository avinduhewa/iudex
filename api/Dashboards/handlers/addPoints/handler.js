'use strict';

const returnData = require('../../lib/return').returnData;
const db = require('../../lib/database');

const initDB = db.initDB;
const ObjectId = db.objectID;

module.exports.addPoints = (event, context, callback) => {

  const data = JSON.parse(event.body);
  if(data.points === null || parseInt(data.points) == "NaN") {
    data.points = 0;  
  }
  data.points = parseInt(data.points);
  if (data.category == '1') {
    data.category = "debating";
  } else if (data.category == '2') {
    data.category = "lobbying";
  } else if (data.category == '3') {
    data.category = "protocol";
  } else {
    data.category = "fps";
  }
  console.log('1', data);
  initDB(db => {
    const COMMITTEE = db.collection('Committees');

    COMMITTEE.findOne({ _id: ObjectId(data.committee) })
      .then(comData => {
        console.log('2', comData);
        if (comData.admins.indexOf(data.email) > -1) {
          console.log(comData.countries.length);
          for (let i = 0; i < comData.countries.length; i++) {
            console.log(data.country === comData.countries[i].name, data.country == comData.countries[i].name);
            if (data.country === comData.countries[i].name) {
              console.log(data.category);
              
              if (data.category === 'fps' && comData.countries[i].points[data.position][data.category] > 0) {
                return returnData({ status: 200, data: "User has already awarded points for FPS" }, context);
              }
              if (data.category == 'debating') {
                comData.countries[i].points[data.position].debating += data.points;
              } else if (data.category == 'lobbying') {
                comData.countries[i].points[data.position].lobbying += data.points;
              } else if (data.category == 'protocol') {
                comData.countries[i].points[data.position].protocol += data.points;
              } else {
                comData.countries[i].points[data.position].fps += data.points;
              }
              console.log(comData);
              comData.logs.push({
                timestamp: Math.floor(Date.now() / 1000),
                chair: data.name,
                chairPosition: data.position,
                email: data.email,
                country: data.country,
                category: data.category,
                points: data.points,
                type: 'add'
              });
              break;
            }
          }
          console.log('4', comData);
          delete comData._id;
          return COMMITTEE.findOneAndUpdate(
            { _id: ObjectId(data.committee) },
            { $set: comData }
          );
        } else {
          return returnData({ status: 200, data: "User does not have permission to add points" }, context);
        }
      })
      .then(comReturnData => {
        console.log('3', comReturnData);
        return returnData({ status: 200, data: comReturnData.value }, context);
      })
      .catch(err => returnData({ status: 402, data: err }, context));
  })
};
