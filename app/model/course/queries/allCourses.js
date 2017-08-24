const Course = require('../course');

module.exports = (name) => Course.find({name: name});
