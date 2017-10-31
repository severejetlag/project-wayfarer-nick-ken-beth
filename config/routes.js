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

router.route('/')
  	.get(controllers.home.home)

router.route('/signup')
	.post(controllers.auth.signup)

// router.route('/login')
// 	.post(passport.authenticate('local'), controllers.auth.login)

router.route('/login')
	.post(authenticateUser, controllers.auth.login)


module.exports = router;
