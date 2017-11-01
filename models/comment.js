const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  	_userId: {
	    type: Schema.Types.ObjectId,
	    ref: 'User'
  	},
  	_postId: {
	    type: Schema.Types.ObjectId,
	    ref: 'Software'
  	}, 
  	date: { type: Date, default: Date.now },
  	content: String
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
