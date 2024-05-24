const express = require('express');
const {connectToMongoDb} = require('./configs/connection.js');
const dotenv = require('dotenv')
const ejs = require('ejs');
const path = require('path');
const userRoute = require('./routes/user.route.js')
const urlRoute = require('./routes/user.route.js')

const app = express();

dotenv.config();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/', userRoute);
app.use('/url', urlRoute);


connectToMongoDb(process.env.MONGODBURL)
.then(() => {
    console.log('Db Connection successfull...');
    app.listen(PORT, () => console.log('Server started on ',PORT))
})
.catch(err => console.log('Db connection failed ----', err));



