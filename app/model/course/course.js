const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
        },
    location: {
        type: String,
        required: true,
        enum: ['Leeds', 'London', 'Newcastle']
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
        default: null,
    },
    minimum: {
        type: Number,
        required: true,
    },
    maximum: {
        type: Number,
        required: true,
    },
    attendee: [
        {
            type: String
        }
    ],
    isFull: {
        type: Boolean,
        default: false
    }

});

const Course = mongoose.model('course', CourseSchema);
module.exports = Course;
