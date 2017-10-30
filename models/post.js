const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
	title: String,
	content: String,
  	date: { type: Date, default: Date.now },
  	_userId: {
	    type: Schema.Types.ObjectId,
	    ref: 'User'
  	},
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
