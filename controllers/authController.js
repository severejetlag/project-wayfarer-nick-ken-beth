const db = require('../models');
const passport = require("passport");

let signup = (req, res) => {
  	db.User.register(new db.User({ username: req.body.username }), req.body.password,
    	function (err, newUser) {
      		passport.authenticate('local')(req, res, function() {
        	res.send(newUser);
      	});
	});
}

let login = (req,res) => {
	passport.authenticate('local')
	console.log(JSON.stringify(req.user));
  	res.send(req.user);
}

// app.post('/login', , function (req, res) {
//   console.log(JSON.stringify(req.user));
//   res.send(req.user);
// });

module.exports = {
	signup,
	login
}