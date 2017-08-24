const Course = require('../course');

module.exports = (location) => Course.find({ location: location });
