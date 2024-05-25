
const getUserData = async (req,res) => {
    
    console.log(req.user, ' -------- user from login ----- ');
    res.render('home');
}

module.exports = {getUserData};