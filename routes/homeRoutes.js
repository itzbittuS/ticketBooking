const router = require('express').Router();
const homeController = require('../controllers/homeController');
const adminController = require('../controllers/adminController');
const { authCookie } = require('../middleware/authCookie');


router.get('/', authCookie, homeController.home);
router.get('/registration', adminController.registrationPage);
router.post('/registration', adminController.registerUser);
router.get('/login', adminController.loginPage);
router.post('/login', adminController.loginUser,);
router.get('/admin', adminController.adminPage);
router.get('/booking/:id', homeController.getShowsPage);
router.get('/booking/seats/:id', homeController.seats);
router.post('/booking', homeController.book);

module.exports = router;
