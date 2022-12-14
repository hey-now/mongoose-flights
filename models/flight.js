const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'EWR'],
        default: 'LAX'
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta', 'Alaskan']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'EWR'],
        default: 'LAX'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().setFullYear(new Date().getFullYear() + 1);
        }
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);