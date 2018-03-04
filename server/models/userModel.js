var mongoose= require('mongoose');
var citySchema = require('./cityModel.js').schema;

var userSchema = new mongoose.Schema({
  username: "",
  password: "",
  savedCities:[citySchema]
})

var User = mongoose.model("User", userSchema);

module.exports = User;