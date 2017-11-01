const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('./models');

//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'supersecret', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());


//Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

let authCehck = (req, res, next) => {
  if(passport.authenticate('local')) return next();

  return res.json({error: "login unsuccessful"})
}

// let authenticatedUser = (req, res, next) => {
//   // If the user is authenticated, then we can continue with next
//   // https://github.com/jaredhanson/passport/blob/a892b9dc54dce34b7170ad5d73d8ccfba87f4fcf/lib/passport/http/request.js#L74
//   if (req.isAuthenticated()) return next();

//   // Otherwise
//   req.flash('errorMessage', 'Login to access!');
//   return res.redirect('/login');
// }

// let unAuthenticatedUser = (req, res, next) => {
//     if (!req.isAuthenticated()) return next();

//     // Otherwise
//   req.flash('errorMessage', 'You are already logged in!');
//   return res.redirect('/');
// }

app.post('/login', authCehck, function (req, res) {
  console.log(JSON.stringify(req.user));
  res.send(req.user);
});

// Use Config routes to move them out of Server.js
var routes = require("./config/routes");
app.use(routes);

const port = process.env.API_PORT || 3001;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
