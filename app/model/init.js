const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = process.env.DB;

module.exports = () => {

mongoose.connect(db, {useMongoClient: true});
mongoose.connection
.once('open', () => console.log('Connection open'))
.on('error', () => console.warn('error connecting to db'));

};
