const express = require('express');
const {getUserData} = require('../controllers/url.controller');

const router = express.Router();

router.get('/', getUserData);

module.exports = router;