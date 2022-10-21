var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// All routes start with '/flights'

// GET /flights
router.get('/', flightsCtrl.index)

module.exports = router;
