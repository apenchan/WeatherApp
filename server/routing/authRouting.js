var passport = require('../models/passport');
var express = require('express');
var router = express.Router();
var User = require("../models/userModel");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// router.post('/register', function (req, res){
// 	User.create(req.body, function(err, user){
// 		if (err) {
// 			console.log(err)
// 			res.status(500).end();
//     }
//     console.log(user);
// 		res.send(true);
// 	});
// });

router.post('/login', passport.authenticate('local', {session: false}), function(req, res, next){
	console.log("the login seems to be successful. Let's celebrate");
	console.log('req.body:' + req.body);
});

module.exports = router;