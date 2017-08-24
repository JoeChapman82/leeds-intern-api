require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 4000;
const api = express.Router();
const path = require('path');
const favicon = require('serve-favicon');

const dbConnect = require(path.join(__dirname, 'app/model/init'));

app.use(favicon(path.join(__dirname, 'app/assets/images', 'favicon.ico')));
app.use('/api', api);
api.use(bodyParser.json({limit: '5mb', parameterLimit: 400000})); // limit based on full case load
api.use(bodyParser.urlencoded( {limit: '5mb', parameterLimit: 400000, extended : false} ));

dbConnect();


require(path.join(__dirname, 'app/routes/routes'))(api);

app.get('/', (req, res) => res.send('running'));
app.get('*', (req, res) => res.status(404).send('Not found'));
app.all('*', (req, res) => res.status(405).send('Method not allowed'));

app.listen(PORT, () => {
    console.log('Hey, Listen!');
});
