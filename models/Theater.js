const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: String,
  location: String
});

module.exports = mongoose.model('Theater', theaterSchema);
