const express = require('express');
const router = express.Router();
const {homePage, createUser, signup, signin, login} = require('../controllers/user.controller');
const {restrictRouteToLoggedInUserOnly} = require('./middlewares/auth.js');

router.get('/',restrictRouteToLoggedInUserOnly, homePage);
router.get('/signup', signup)
router.post('/create', createUser)
router.post('/signin', signin)
router.get('/login', login)

module.exports = router;