const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
// var authRouting = require("./server/routing/authRouting.js");//joy. get to figure out why this page doesnt work later :/
var User = require('./server/models/userModel.js');
var City = require('./server/models/cityModel.js'); 
var Comment = require('./server/models/commentModel.js');
var expressSession = require('express-session');
var db = process.env.MONGODB_URI || "mongodb://localhost/savedweatherapp";
mongoose.connect(db);

app.use(express.static('./server/static/'));
app.use(express.static('./node_modules'));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(expressSession({ secret: 'thisIsASecret', resave: false, saveUninitialized: false }));//secret will be change to process.env later
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/test', function(req, res){
	res.send('at test')
	console.log("i get to test")
})

app.post('/register', function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) {
      console.log(err)
      res.status(500).end();
    }
    console.log(user);
    res.send(user.username);
  });
});

// app.use("/auth", authRouting);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});