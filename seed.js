var db = require("./models");

var newUsers = [
{
  username: "NotNickLee"
},
{
  username: "NotKenDong"
},
{
  username: "NotBethWitten"
}];

var newCity = [{
  cityName: "San Francisco"
}];

var newPost = [{
  title: "Fog, fog city",
  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic."
}];


db.User.remove({}, function(err, users){
  	db.User.create(newUsers, function(err, users){
	    // code in here runs after all albums are created
	    if (err) { return console.log('ERROR', err); }
	    console.log("all users:", users);
	    console.log("created", users.length, "users");

	    db.City.remove({}, function(err, users){
			db.City.create(newCity, function(err, cities){
				if(err) {return console.log('ERROR', err);}
				console.log("all cities:", cities);
				console.log('created', cities.length, 'cities');
			})
		})
	})
})