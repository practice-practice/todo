'use strict';

// Require ====================================================================
var express = require('express');
var mongoose = require('mongoose');

var rootRoutes = require('./routes/root_routes');
var userRoutes = require('./routes/user_routes');
var todoRoutes = require('./routes/todo_routes');

// Settup =====================================================================
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todo_dev');

// Routes =====================================================================
var rootRouter = express.Router();
var userRouter = express.Router();
var todoRouter = express.Router();

rootRoutes(rootRouter);
userRoutes(userRouter);
todoRoutes(todoRouter);

// API V1
app.use('/api/v1', rootRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', todoRouter);

// Server Init ================================================================
app.listen(port, function() {
  console.log('Server listening on port: ' + port);
});
