const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
    const flightId = req.params.id;
    const ticket = new Ticket(req.body);
    ticket.flight = flightId;
    ticket.save(function(err) {
        if(err) return res.redirect(`/flights/${flightId}/tickets/new`);
        res.redirect(`/flights/${flightId}`);
    });
}

// const ticket = req.body;
// ticket.flight = req.params.id;
// Ticket.create(ticket, function(err) {
    // if(err)
    // res.redirect(`/flights/${req.params.id`})})

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add New Ticket',
        flightId: req.params.id
    });
}