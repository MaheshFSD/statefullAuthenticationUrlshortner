const express = require('express');
const {connectToMongoDb} = require('./configs/connection.js');
const dotenv = require('dotenv')
const ejs = require('ejs');
const path = require('path');
const urlRoute = require('./routes/url.route.js')

const app = express();

dotenv.config();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', ejs);
app.set('views', path.resolve('./views'));

app.use('/', urlRoute);


connectToMongoDb(process.env.MONGODBURL)
.then(() => {
    console.log('Db Connection successfull...');
    app.listen(PORT, () => console.log('Server started on ',PORT))
})
.catch(err => console.log('Db connection failed ----', err));




