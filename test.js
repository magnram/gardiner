const time = new Date();
const lat = 59.93194229740684;
const lng = 10.739063262939453;

const sunCalc = require('suncalc');
const pos = sunCalc.getPosition(time, lat, lng);
const azimuth = pos.azimuth * 180 / Math.PI + 180;
const altitude = pos.altitude * 180 / Math.PI;

console.log(azimuth, altitude);