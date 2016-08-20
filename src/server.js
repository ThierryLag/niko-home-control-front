var express = require('express');
var app = express();

var log = require('saga-logger')
  .create({ module: module.id });

var bodyParser = require('body-parser');

var config = require('config');

var apiRoute = require('./routes/api');
var rootRoute = require('./routes/root');

app.set('view engine', 'ejs');
app.set('views', '/var/www/src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rootRoute);
app.use('/api', apiRoute);

app.listen(config.httpPort, function () {
  log.info('server-started', { port: config.httpPort });
});
