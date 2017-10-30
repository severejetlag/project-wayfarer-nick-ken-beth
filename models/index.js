var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/galavant', {useMongoClient: true});

var City = require('./city');
var Comment = require('./comment');
var Post = require('./post');
var User = require('./user');

module.exports = {
  City: City,
  Comment: Comment,
  Post: Post,
  User: User
};
