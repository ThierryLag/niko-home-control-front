var express = require('express');
var router = express.Router();

var responseFormatter = require('../helpers/formatResponses');
var niko = require('../resources/niko');

router.post('/actions', function (req, res) {
  var payload = req.body;

  niko
    .executeActions(payload.action, parseInt(payload.value, 0))
    .then(function (response) {
      res.status(200).json(responseFormatter.success(response));
    })
    .catch(function (error) {
      res.status(500).json(responseFormatter.error(error));
    });
});

module.exports = router;
