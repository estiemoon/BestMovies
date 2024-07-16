 const {join,login} = require('../services/userService');

const joinController = (req, res)=> {
    const {email, password, username} = req.body;
    userInfo = {email,password,username,};
    join(userInfo,res);
}

const loginController = (req,res) => {
    const {email, password} = req.body;
    userInfo = {email,password};
    login(userInfo,res);
}

 
module.exports = {joinController, loginController};