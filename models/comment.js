var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./post');
var User = require('./user');

var CommentSchema = new Schema({
  commentCreator: [ String ];
  post: [ String ];
  commentDate: String;
  commentContent: String;
})

var CommentSchema = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
