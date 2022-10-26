const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /tickets
router.post('/tickets', ticketsCtrl.create);
// POST //:id/performers
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;