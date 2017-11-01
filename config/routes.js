const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const passport = require("passport");

let authenticateUser = (req, res, next) => {
	if (passport.authenticate('local')) return next();
	// Otherwise
	return res.json({error: 'Invalid username or password'});
}

let authenticatedUser = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	// Otherwise
	return res.json({error: 'Invalid username or password'});
}

let unAuthenticatedUser = (req, res, next) => {
  	if (!req.isAuthenticated()) return next();
  	// Otherwise
	return res.redirect('/');
}

// Post request for Axios for signup
router.route('/signup')
	.post(controllers.auth.signup)

// Handle city requests 
router.route('/api/cities')
	.get(controllers.cities.show)

module.exports = router;
