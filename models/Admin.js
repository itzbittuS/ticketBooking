const mongoose = require('mongoose');


const adminRegister = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    confpassword: String
})

module.exports = mongoose.model('Admin', adminRegister)