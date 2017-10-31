const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const passport = require("passport");

let authenticateUser = (req, res, next) => {
	if (req.authenticate('local')) return next();
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
router.route('/api/signup')
	.post(controllers.auth.signup)

// Post request for Axios for login
router.route('/api/login')
	.post(authenticateUser, controllers.auth.login)

// Handle city requests 
router.route('/api/cities')
	.get(controllers.cities.show)

module.exports = router;
