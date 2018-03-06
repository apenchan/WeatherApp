//Will have to understand later, after more progress, why this page does not want to work :()

// var passport = require('../models/passport');
// var express = require('express');
// var router = express.Router();
// var User = require("../models/userModel");

// //the '/users' routes will go here

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// router.post('/register', function (req, res){
// 	console.log("am i even getting here?!?")
// 	User.create(req.body, function(err, user){
// 		if (err) {
// 			console.log("i am getting here")
// 			console.log(err)
// 			res.status(500).end();
//     }
//     console.log(user);
// 		res.send(true);
// 	});
// });

// router.get('/test', function(req, res){
// 	res.send('at test')
// 	console.log("i get to test")
// })

// router.post('/login', passport.authenticate('local', {session: false}), function(req, res, next){
// 	console.log("the login seems to be successful. Let's celebrate");
// 	console.log('req.body:' + req.body);
// });

// module.exports = router;