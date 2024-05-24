const User = require('../models/user.model');

const homePage = (req,res) => {
    // res.send("Helloooooo");
    res.render('login');
}

const signup = async (req, res) => {
    res.render('signup');
}

const signin = async (req, res) => {
    const {email, password} = req.body;
    // skipping some validation
    const user = User.findOne({email});
    if(!user) return res.render('/login');
    res.render('home');
}

const login = async (req, res) => {
    res.render('login');
}

const createUser = async (req, res) => {
    const {fullName, email, password} = req.body;
    // do this in try catch block
    const user = await User.create({userName: fullName, email, password});
    if(!user) return res.render('signup');
    res.render('login');
}

module.exports = {homePage, createUser, signup, signin, login};