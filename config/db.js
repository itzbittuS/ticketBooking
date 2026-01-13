const mongoose = require('mongoose');

const db = () => {
    mongoose.connect('mongodb://localhost:27017/moviebooking').then(() => {
        console.log("✅ Connected to MongoDB"); 
    })
}

module.exports = db;




