const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // Import your multer.js file
const adminController = require('../controllers/adminController');

// GET: Display the form
router.get('/add-movie', adminController.addMoviePage);

// POST: Handle the upload
router.post('/add-movie', upload.single('poster'), adminController.addMovie);



module.exports = router;