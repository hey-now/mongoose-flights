const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToFlight
};

function addToFlight(req, res) {
  Ticket.findById(req.params.id, function(err, ticket) {
    ticket.flight.push(req.body.ticketId);
    ticket.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function create(req, res) {
    console.log(req, res);
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('tickets/new');
  });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({})
            .sort('seat')
            .exec(function (err, tickets) {
            res.render('tickets/new', {
                title: 'Add New Ticket',
                tickets
            });
        });
    });
}