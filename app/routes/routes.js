const getByLocation = require('../model/course/queries/findCoursesByLocation');
const addCourse = require('../model/course/queries/addNewCourse');
const addAttendee = require('../model/course/queries/addAttendee');
const allCourses = require('../model/course/queries/allCourses');
const everyCourse = require('../model/course/queries/everyCourse');
const byId = require('../model/course/queries/byId');


module.exports = (api) => {

    api.get('/', (req, res) => {
        res.send('hey');
    });

    api.get('/courses/:name', (req, res) => {
        let courseName = req.params.name === 'agile-foundation' ? 'Digital & Agile Foundation Course' : 'Digital & Agile Awareness Course';
        allCourses(courseName)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
    });
    api.post('/course', [
        (req, res, next) => {
            let course = {
                name: 'Digital & Agile Awareness Course',
                location: 'Newcastle',
                startDate: new Date('06 Nov 2017'),
                endDate: new Date('06 Nov 2017'),
                minimum: 8,
                maximum: 18,
                isFull: false
            };
            addCourse(course)
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send(error);
            });
        }
    ]);

    api.post('/addAttendee', [
        (req, res, next) => {
            addAttendee(req.body.id, req.body.attendee)
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send(error);
            });
        }
    ]);

    api.get('/course/:location', [
        (req, res, next) => {
            getByLocation('Leeds')
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
        }
    ]);

    api.get('/allCourses', (req, res, next) => {
        everyCourse()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    });

    api.get('/byId', (req, res, next) => {
        byId(req.body.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    });

    return api;
};
