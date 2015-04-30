'use strict';

var bodyparser = require('body-parser');

module.exports = function(app) {
  app.use(bodyparser.json());

  // GET
  app.get('/', function(req, res) {
    // some code
  });
};
