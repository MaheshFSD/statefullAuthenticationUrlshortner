const express = require('express');
const router = express.Router();
const {homePage} = require('../controllers/url.controller');

router.get('/', homePage);

module.exports = router;






