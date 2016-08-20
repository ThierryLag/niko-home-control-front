var express = require('express');
var router = express.Router();
var _ = require('lodash');

var niko = require('../resources/niko');

router.get('/', function (req, res) {
  var results = [];
  niko.listLocations()
    .then(function (locations) {
      return niko.listActions()
        .then(function (actions) {
          _.forEach(locations.data, function (valueA) {
            valueA.actions = [];

            _.forEach(actions.data, function (valueB) {
              if (valueB.location === valueA.id) {
                valueA.actions.push(valueB);
              }
            });

            if (valueA.actions.length > 0) {
              results.push(valueA);
            }
          });

          return results;
        });
    }).then(function (results) {
      res.render('index', { results: results });
    });
});

module.exports = router;
