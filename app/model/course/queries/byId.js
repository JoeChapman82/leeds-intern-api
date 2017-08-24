const Course = require('../course');

module.exports = (id) => Course.findById(id);
