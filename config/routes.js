const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const passport = require("passport");

let authenticatedUser = (req, res, next) => {
	// If the user is authenticated, then we can continue with next
	// https://github.com/jaredhanson/passport/blob/a892b9dc54dce34b7170ad5d73d8ccfba87f4fcf/lib/passport/http/request.js#L74
	if (req.isAuthenticated()) return next();

	// Otherwise
	req.flash('errorMessage', 'Login to access!');
	return res.redirect('/login');
}

let unAuthenticatedUser = (req, res, next) => {
  	if (!req.isAuthenticated()) return next();

  	// Otherwise
	req.flash('errorMessage', 'You are already logged in!');
	return res.redirect('/');
}

router.route('/')
  	.get(controllers.home.home)

router.route('/signup')
	.post(controllers.auth.signup)

// router.route('/login')
// 	.post(controllers.auth.login)

module.exports = router;
