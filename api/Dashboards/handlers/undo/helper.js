'use strict';

module.exports.getLastUserAction = (comData, data) => {
  const reverseLogs = comData.logs.reverse();
  for (let activity of reverseLogs) {
    if (activity.email === data.email) {
      return activity;
    }
  }
}

module.exports.updateCommittee = (comData, action, data) => {
  for (let x in comData.countries) {
    if (comData.countries[x].name === action.country) {
      comData.countries[x].points[action.chairPosition][action.category] -= action.points;
      break;
    }
  }
  comData.logs.push({
    timestamp: Math.floor(Date.now() / 1000),
    chair: data.name,
    chairPosition: data.position,
    email: data.email,
    country: action.country,
    category: action.category,
    points: action.points,
    type: 'undo'
  });
  return comData;
}