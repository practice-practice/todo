'use strict';

var bodyparser = require('body-parser');

module.exports = function(app) {
  app.use(bodyparser.json());

  // GET
  app.get('/user', function(req, res) {
    // some code
  });
};
