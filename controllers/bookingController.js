const Movie = require('../models/Movie');

exports.getShowsPage = async (req, res) => {
    try {
        const movieId = req.params.id; // The ID from the URL
        
        // 1. Find the movie
        const movie = await Movie.findById(movieId);
        
        // 2. Find ALL shows where the 'movie' field matches this ID
        // CRITICAL: Ensure 'movie' is the name of the field in your Show model
        const shows = await Show.find({ movie: movieId }).populate('screen');
        
        console.log(`Found ${shows.length} shows for movie: ${movie.title}`);

        res.render('shows', { movie, shows });
    } catch (err) {
        console.error("Booking Page Error:", err);
        res.status(500).send("Server Error");
    }
};
