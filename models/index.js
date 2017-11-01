const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/galavant', {useMongoClient: true});

const City = require('./city');
const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');

module.exports = {
  City: City,
  Comment: Comment,
  Post: Post,
  User: User
};
