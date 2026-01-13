const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Show = require('./models/Show');
const Screen = require('./models/Screen');

mongoose.connect('mongodb://localhost:27017/bookMyShow'); // Update with your DB name

async function link() {
    const movie = await Movie.findOne(); // Finds the first movie you added
    let screen = await Screen.findOne();
    if (!screen) screen = await Screen.create({ screenNumber: 1, totalSeats: 40 });

    if (movie) {
        await Show.create({
            movie: movie._id, // This is the most important link!
            screen: screen._id,
            showDate: "2026-01-10",
            showTime: "07:30 PM",
            availableSeats: ['A1', 'A2', 'A3', 'A4','A5', 'B1', 'B2','B3','B4','B5']
        });
        console.log("✅ Show linked to Movie: " + movie.title);
    } else {
        console.log("❌ No movie found. Please add a movie first.");
    }
    process.exit();
}
link();