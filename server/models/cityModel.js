var mongoose= require('mongoose');
var commentSchema = require('./commentModel.js').schema;

var citySchema = new mongoose.Schema({
  cityName: "",
  cityZipcode: "",
  savedComments: [commentSchema]
})

var City = mongoose.model("City", citySchema);

module.exports = City;