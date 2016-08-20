var niko = require('niko-home-control');
var config = require('config');

niko.init({
  ip: config.niko.homeControl.ip,
  port: config.niko.homeControl.port,
  timeout: config.niko.homeControl.timeout
});

module.exports = niko;
