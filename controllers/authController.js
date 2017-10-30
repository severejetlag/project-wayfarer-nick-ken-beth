const db = require('../models');
const passport = require("passport");

let signup = (req, res) => {
  	db.User.register(new User({ username: req.body.username }), req.body.password,
    	function (err, newUser) {
      		passport.authenticate('local')(req, res, function() {
        	res.send(newUser);
      	});
	});
}

module.exports = {
	signup
}