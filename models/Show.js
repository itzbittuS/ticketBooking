const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie', // Must match your Movie model name exactly
        required: true
    },
    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen',
        required: true
    },
    showTime: String,
    showDate: String,
    ticketPrice: { type: Number, required: true, default: 250 },
    availableSeats: [String]
});

module.exports = mongoose.model('Show', showSchema);
