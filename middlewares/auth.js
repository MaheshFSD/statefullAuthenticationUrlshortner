const {getSessionIdUser} = require('../service/auth')

const restrictRouteToLoggedInUserOnly = (req,res,next) => {
const userId = req.cookies?.uid;
if(!userId) return res.render('login');
const user = getSessionIdUser(userId);
if(!user) return res.render('login');
req.user = user;
next();
}

module.exports = {restrictRouteToLoggedInUserOnly}