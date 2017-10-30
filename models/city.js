var mongoose = require('mongoose');
var Scheman = mongoose.Schema;
var Post = require('./post');

var CitySchema = new Schema ({
  cityName: String;
  posts: [ String ];
})

var CitySchema = mongoose.model('City', CitySchema);

module.exports = City;
