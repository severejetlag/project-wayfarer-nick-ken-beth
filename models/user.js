var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./post');

var UserSchema = new Schema({
  email: String;
  password: String;
  username: String;
  city: String;
  joinDate: String;
  profileImg: { data: Buffer, contentType: String }; // ref from: https://gist.github.com/aheckmann/2408370
  posts: [ String ];
})

var UserSchema = mongoose.model('User', UserSchema);

module.exports = User;
