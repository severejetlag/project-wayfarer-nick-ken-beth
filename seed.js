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

var newCities = [
	{name: "San Francisco"},
	{name: "Boston"},
	{name: "New York City"},
	{name: "Seattle"},
	{name: "Los Angeles"},
	{name: "Austin"},
];

var newPosts = [
	{
	  title: "Fog, fog city",
	  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic.",
	  city: "San Francisco",
	  username: 'NotNickLee'
	},
	{
	  title: "Go Sox",
	  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic.",
	  city: "Boston",
	  username: 'NotKenDong'
	},
	{
	  title: "Rain Rain and Microsoft",
	  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic.",
	  city: "San Francisco",
	  username: 'NotBethWitten'
	},
	{
	  title: "It's not like other Texas",
	  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic.",
	  city: "Austin",
	  username: 'NotNickLee'
	},
	{
	  title: "Drive...traffic traffic traffic...drive...traffic traffic traffic",
	  content: "Occupy raw denim lumbersexual marfa umami, poke whatever chia synth tbh. Slow-carb pork belly pickled single-origin coffee. Pug affogato farm-to-table retro put a bird on it thundercats, dreamcatcher drinking vinegar artisan man bun quinoa banh mi. Pop-up bespoke meggings photo booth, activated charcoal neutra aesthetic gluten-free sustainable cred sartorial four loko. Cronut small batch viral swag YOLO before they sold out shabby chic asymmetrical vice seitan godard readymade ugh franzen. Kinfolk poke chillwave neutra banjo flexitarian bespoke succulents hot chicken. Brooklyn iceland helvetica pickled try-hard wolf cold-pressed distillery sriracha freegan copper mug aesthetic.",
	  city: "Los Angeles",
	  username: 'NotNickLee'
	}
];


db.User.remove({}, function(err, users){
  	db.User.create(newUsers, function(err, users){
	    // code in here runs after all albums are created
	    if (err) { return console.log('ERROR', err); }
	    console.log("all users:", users);
	    console.log("created", users.length, "users");

	    db.City.remove({}, function(err, users){
			db.City.create(newCities, function(err, cities){
				if(err) {return console.log('ERROR', err);}
				console.log("all cities:", cities);
				console.log('created', cities.length, 'cities');
				db.Post.remove({}, function(err, posts){
					console.log('removed all posts');
					newPosts.forEach(function(postData) {
						var post = new db.Post({
							title: postData.title,
				          	content: postData.content
						});
				        db.User.findOne({username: postData.username}, function (err, foundUser) {
				          	console.log(`found user ${foundUser.username} for for post ${post.title}`);
				          	if (err) {
				            	console.log(err);
				            	return;
				          	}
				          	post._userId = foundUser._id;
				          	console.log("\nUSER\N",foundUser._id)				   
							db.City.findOne({name: postData.city}, function (err, foundCity) {
					          	console.log(`found city ${foundCity.name} for for post ${post.title}`);
					          	if (err) {
					            	console.log(err);
					            	return;
					          	}
					          	console.log("\City\n",foundCity._id)				   
					          	post._cityId = foundCity._id;
					          	post.save(function(err, savedPost){
						        	if (err) {
						          		return console.log(err);
									}
									console.log('saved post item');
									process.exit(0);
								});
							});
						});
					});
				});
			})
		})
	})
})