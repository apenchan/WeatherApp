var mongoose= require('mongoose');

var commentSchema = new mongoose.Schema({
  text: ''
})

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;