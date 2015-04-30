'use strict';

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  message: {type: String, required: true}
});

module.exports = mongoose.model('Todo', todoSchema);
