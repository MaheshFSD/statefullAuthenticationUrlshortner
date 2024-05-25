const express = require('express');
const {getUserData} = require('../controllers/url.controller');

const router = express.Router();

router.get('/',(req,res,next) => {
    console.log('call received from signin ------------ ');
    next();
}, getUserData);

module.exports = router;