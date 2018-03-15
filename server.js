const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var auth = require('./controllers/auth.js');
var session = require('express-session');
// var authRouting = require("./server/routing/authRouting.js");//joy. get to figure out why this page doesnt work later :/
var User = require('./server/models/userModel.js');
var City = require('./server/models/cityModel.js'); 
var Comment = require('./server/models/commentModel.js');
var expressSession = require('express-session');
var db = process.env.MONGODB_URI || "mongodb://localhost/savedweatherapp";
mongoose.connect(db);
var port = process.env.PORT || 3000;

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(express.static('./controllers'));
app.use(express.static('./node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

var auth = require('./controllers/auth.js');
app.use('/auth', auth);

// app.use("/auth", authRouting);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})


// start the server
app.listen(port);
console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000')