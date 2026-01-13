const Show = require('../models/Show');
const Ticket = require('../models/Ticket');
const Movie = require('../models/Movie');

exports.home = async (req, res) => {
    const movies = await Movie.find();
    res.render('index', { movies });
};

exports.shows = async (req, res) => {
    try {
        const movieId = req.params.id;
        console.log("Requested Movie ID:", movieId);  // <--- Add this

        const movie = await Movie.findById(movieId);
        if (!movie) {
            console.log("Movie not found for ID:", movieId);
            return res.status(404).send("Movie not found");
        }
        console.log("Movie found:", movie.title);

        const shows = await Show.find({ movie: movieId }).populate('screen');
        // console.log(`Found ${shows.length} shows for ${movie.title}`);  // <--- Add this
        // shows.forEach((show, i) => {
        //     console.log(`Show ${i+1}: Date=${show.showDate}, Time=${show.showTime}, Seats left=${show.availableSeats.length}`);
        // });

        res.render('shows', { movie, shows });
    } catch (err) {
        console.error("Error in shows route:", err);  // <--- Improved log
        res.status(500).send("Error loading shows");
    }
};
// Display the seat map for a specific show
exports.seats = async (req, res) => {
    try {
        const show = await Show.findById(req.params.id).populate('movie');
        res.render('seats', { show });
    } catch (err) {
        res.status(500).send("Error loading seats");
    }
};

// Handle the booking POST request
exports.book = async (req, res) => {
    try {
        const { showId, seats } = req.body;
        const selectedSeats = Array.isArray(seats) ? seats : [seats];

        const show = await Show.findById(showId);

        show.availableSeats = show.availableSeats.filter(s => !selectedSeats.includes(s));
        await show.save();

        const ticket = await Ticket.create({
            show: showId,
            seats: selectedSeats
        });

        // Populate for rendering
        const populatedTicket = await Ticket.findById(ticket._id)
            .populate({
                path: 'show',
                populate: { path: 'movie' }
            });

        res.render('ticket', { ticket: populatedTicket });
    } catch (err) {
        console.error(err);
        res.status(500).send("Booking failed");
    }
};


exports.getShowsPage = async (req, res) => {
    try {
        // 1. Fetch the movie using the ID from the URL
        const movie = await Movie.findById(req.params.id);

        // 2. Fetch the shows for this movie
        const shows = await Show.find({ movie: req.params.id }).populate('screen');

        // 3. PASS THE MOVIE OBJECT HERE
        // If you forget 'movie' here, the EJS code will throw an error
        res.render('shows', { movie: movie, shows: shows });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

