const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  seats: [String],
  bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
