const express = require('express');
const router = express.Router();
const destArrivalsCtrl = require('../controllers/dest-arrivals');

// All routes "starts with" / (root)
// POST /flights/:id/dest-arrivals
router.post('/flights/:id/dest-arrivals', destArrivalsCtrl.create);

module.exports = router;