const NodeGeoCoder = require('node-geocoder');

const options = {
  provider: 'mapquest',
  httpAdapter: 'https', // Default
  apiKey: 'vr8KAz3tMRiUGhSd147A0WK46jURqZpz', // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeoCoder(options);

module.exports = geocoder;
