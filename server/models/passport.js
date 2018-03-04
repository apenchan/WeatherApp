var User = require('./userModel.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use( new LocalStrategy(
  function(username, password, done ) {
    User.findOne({ username: username }, function( err, dbUser ) {
      if (err) { 
        return done(err); }
      if (!dbUser) {
        return done(null, false);
      }
      if (!dbUser.authenticate(password)) {
        return done(null, false);
      }

      return done(null, dbUser);
    });
  })
);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


module.exports = passport;