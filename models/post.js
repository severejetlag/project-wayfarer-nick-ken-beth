var mongoose = require('mongoose');
var Scheman = mongoonse.Schema;
var User = require('./user');

var PostSchema = new Schema ({
  postTitle: String;
  postContent: String;
  postDate: String;
  postCreator: [ String ];
})

var PostSchema = mongoose.model('Post', CommentSchema);

module.exports = Post;
