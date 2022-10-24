const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function show(req, res) {
    Flight.findById(req.params.id).populate('destinations').exec(function(err, flight) {
        flight.destinations.sort(function(a, b) {
            return a.arrival- b.arrival;
        });
        console.log(flight.destinations);
        res.render('flights/show', { title: 'Flight Details', flight });
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } 
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}).sort('-departs').exec(function(err, flights) {
        res.render('flights/index', { flights });
    });
}