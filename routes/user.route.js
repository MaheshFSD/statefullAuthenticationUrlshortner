const express = require('express');
const router = express.Router();
const {homePage, createUser, signup, signin, login} = require('../controllers/user.controller');

router.get('/', homePage);
router.get('/signup', signup)
router.post('/create', createUser)
router.post('/signin', signin)
router.get('/login', login)

module.exports = router;