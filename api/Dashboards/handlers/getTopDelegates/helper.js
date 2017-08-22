'use strict';

module.exports.finalizeCommitteePoints = (comData) => {
  const countries = [];
  for (let country of comData.countries) {
    let totalPoints = 0;
    for (let points of country.points) {
      const debating = (points.debating / 500) * 200;
      const lobbying = (points.lobbying / 500) * 150;
      const protocol = (points.protocol / 500) * 50;
      const fps = (points.fps / 100) * 100;

      totalPoints += parseInt(debating + lobbying + protocol + fps);
    }
    console.log(totalPoints);
    totalPoints = parseInt(totalPoints/country.points.length);
    let temp_country = country;
    temp_country.totalPoints = totalPoints;
    countries.push(temp_country);
  }
  return countries;
}