const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
  screenNumber: Number,
  capacity: Number
});

module.exports = mongoose.model('Screen', screenSchema);
