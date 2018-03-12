var mongoose= require('mongoose');
var passport = require('passport');
var citySchema = require('./cityModel.js').schema;
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  username: "",
  password: "",
  savedCities:[citySchema]
})

userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 10);
	}
	next();
});

userSchema.methods.verifyPassword = function(passwordTry) {
	return bcrypt.compareSync(passwordTry, this.password);
};

var User = mongoose.model("User", userSchema);

module.exports = User;