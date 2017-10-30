const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
	username: String,
    password: String
	city: String,
  	date: { type: Date, default: Date.now },
	profileImg: { data: Buffer, contentType: String } // ref from: https://gist.github.com/aheckmann/2408370
})

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);
module.exports = User;
