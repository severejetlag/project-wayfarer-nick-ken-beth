const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post');

const CitySchema = new Schema ({
  	cityName: String
})

const City = mongoose.model('City', CitySchema);

module.exports = City;
