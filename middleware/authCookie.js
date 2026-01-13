

exports.authCookie = (req, res, next) => {
    if (req.cookies.userID) {
        next();
    } else {
        res.redirect('/login');
    }
};