const Course = require('../course');

module.exports = (course) => {
    let newCourse = new Course(course);
    return newCourse.save();
};
