const express = require('express');
const {connectToMongoDb} = require('./configs/connection.js');
const dotenv = require('dotenv')

const app = express();

dotenv.config();
const PORT = 8000;


connectToMongoDb(process.env.MONGODBURL)
.then(() => {
    console.log('Db Connection successfull...');
    app.listen(PORT, () => console.log('Server started on ',PORT))
})
.catch(err => console.log('Db connection failed ----', err));




