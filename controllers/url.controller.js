
const getUserData = async (req,res) => {
    console.log(req.user, ' -------- user from login ----- ');
    res.redirect('home');
}

module.exports = {getUserData};