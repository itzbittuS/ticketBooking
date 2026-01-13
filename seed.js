const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Screen = require('./models/Screen');
const Show = require('./models/Show');

mongoose.connect('mongodb://localhost:27017/moviebooking'); // Keep your exact DB name

(async () => {
  await Movie.deleteMany({});
  await Screen.deleteMany({});
  await Show.deleteMany({});

  // Original movies (updated with better posters/ratings)z
  const interstellar = await Movie.create({
    title: 'Interstellar',
    genre: 'Sci-Fi, Drama',
    duration: 169,
    rating: 8.7,
    poster: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  });

  const avatar = await Movie.create({
    title: 'Avatar: Fire and Ash',
    genre: 'Action, Adventure, Fantasy, Sci-Fi',
    duration: 195,
    rating: 7.6,  // Updated average from current reviews
    poster: 'https://4kwallpapers.com/images/walls/thumbs_3t/24703.jpg'
  });

  const sinners = await Movie.create({
    title: 'Sinners',
    genre: 'Horror, Drama',
    duration: 137,
    rating: 8.2,
    poster: 'https://wallpapercave.com/wp/wp15055181.webp'
  });

  const superman = await Movie.create({
    title: 'Superman',
    genre: 'Action, Adventure, Sci-Fi',
    duration: 129,
    rating: 7.1,
    poster: 'https://images.hdqwalls.com/download/superman-icon-of-justice-kn-1080x1920.jpg'
  });

  const dhurandhar = await Movie.create({
    title: 'Dhurandhar',
    genre: 'Action, Thriller, Spy',
    duration: 214,
    rating: 8.6,
    poster: 'https://wallpapercave.com/wp/wp16062971.jpg'  // Replace if you have a better one
  });

  // === 12+ Additional Popular Movies in Theaters Jan 2026 ===
  const sendHelp = await Movie.create({
    title: 'Send Help',
    genre: 'Horror, Thriller',
    duration: 108,
    rating: 7.0,
    poster: 'https://wallpapercave.com/wp/wp14821625.webp'
  });

  const greenland2 = await Movie.create({
    title: 'Greenland: Migration',
    genre: 'Action, Disaster',
    duration: 120,
    rating: 6.5,
    poster: 'https://wallpapercave.com/wp/wp16076452.jpg'
  });

  const primate = await Movie.create({
    title: 'Primate',
    genre: 'Horror',
    duration: 95,
    rating: 6.2,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjxfLFf3YSLDaA18XcIKAOfBelonCQ5R6iw&s'
  });

  const boneTemple = await Movie.create({
    title: '28 Years Later: The Bone Temple',
    genre: 'Horror, Zombie',
    duration: 115,
    rating: 7.8,
    poster: 'https://cdn.district.in/movies-assets/images/cinema/28-Years-Later_Gallery-0880be80-8a2a-11f0-ae97-a5e555453acf.jpg'
  });

  const tronAres = await Movie.create({
    title: 'Tron: Ares',
    genre: 'Sci-Fi, Action',
    duration: 130,
    rating: 6.8,
    poster: 'https://images.hdqwalls.com/download/disney-tron-ares-2025-x3-1080x1920.jpg'
  });

  const smashingMachine = await Movie.create({
    title: 'The Smashing Machine',
    genre: 'Drama, Biography, Sports',
    duration: 135,
    rating: 8.0,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQ46Pf2MAoMsYBbbxMtzB6dkp4ztOvDnTg&s'
  });

  const returnSilentHill = await Movie.create({
    title: 'Return to Silent Hill',
    genre: 'Horror',
    duration: 110,
    rating: 6.4,
    poster: 'https://wallpapercave.com/wp/wp13335821.jpg'
  });

  const peopleVacation = await Movie.create({
    title: 'People We Meet on Vacation',
    genre: 'Romance, Comedy',
    duration: 105,
    rating: 6.9,
    poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/People_We_Meet_on_Vacation_poster.jpg'
  });

  const weBuryDead = await Movie.create({
    title: 'We Bury the Dead',
    genre: 'Horror, Thriller',
    duration: 98,
    rating: 6.7,
    poster: 'https://cdn.district.in/movies-assets/images/cinema/gallery-Recovered-Recovered%20(1)-d94207f0-c908-11f0-8665-87539e403fc5.jpg'
  });

  const bugonia = await Movie.create({
    title: 'Bugonia',
    genre: 'Comedy, Sci-Fi',
    duration: 112,
    rating: 7.3,
    poster: 'https://image.tmdb.org/t/p/original/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg'
  });

  const hamnet = await Movie.create({
    title: 'Hamnet',
    genre: 'Drama, Historical',
    duration: 125,
    rating: 7.9,
    poster: 'https://m.media-amazon.com/images/M/MV5BMDQ5ZmY0OWYtOTYzZi00Mzg5LWE3N2EtMjYwZTAzZmJhYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  });



  // Create screen
  const screen = await Screen.create({
    screenNumber: 1,
    capacity: 40
  });

  const seats = Array.from({ length: 40 }, (_, i) => `A${i + 1}`);

  const showtimes = ['12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'];

  const baseDate = new Date('2026-01-08');
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0];
  });

  // All movies array (17 total)
  const movies = [
    interstellar, avatar, sinners, superman, dhurandhar,
    sendHelp, greenland2, primate, boneTemple, tronAres,
    smashingMachine, returnSilentHill, peopleVacation,
    weBuryDead, bugonia, hamnet
  ];

  for (const movie of movies) {
    for (const date of dates) {
      for (const time of showtimes) {
        await Show.create({
          movie: movie._id,
          screen: screen._id,
          showDate: date,
          showTime: time,
          ticketPrice: Math.floor(Math.random() * (400 - 200) + 200), // Random price between 200-400
          availableSeats: [...seats]
        });
      }
    }
  }

  console.log('✅ Database seeded with 17 movies! Ready for January 2026 bookings.');
  process.exit();
})();