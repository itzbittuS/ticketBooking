const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
require('./models/Movie');
require('./models/Screen');
require('./models/Show');
require('./models/Theater');
require('./models/Ticket');
require('./models/Customer');
const app = express();
connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/', require('./routes/homeRoutes'));
app.use('/admin', require('./routes/admin'));

app.listen(3000, () => console.log("Server running on port 3000"));
