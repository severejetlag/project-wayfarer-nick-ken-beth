const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.route('/')
  .get(controllers.home.home)

module.exports = router;
