const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  duration: Number,
  rating: Number,
  poster: String // filename stored
});

module.exports = mongoose.model('Movie', movieSchema);
