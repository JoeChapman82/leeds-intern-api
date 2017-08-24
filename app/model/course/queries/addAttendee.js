const Course = require('../course');

module.exports = (id, attendee) => {
    return Course.findById(id)
    .then((result) => {
        if(result.attendee.length + 1 === result.maximum) {
            result.isFull = true;
        }
        result.attendee.push(attendee);
        return result.save();
    });
};
