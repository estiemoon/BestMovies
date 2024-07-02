const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

//sign, verify

module.exports = {
    sign : (user) => {
        return jwt.sign(
            {
                "username" : user.username, 
                "email": user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn : '10 mins',
                issuer : 'moon'
            })
        },

    verify : (token) => {
        try{
            const user = jwt.verify(token, process.env.JWT_SECRET);
            return user;

        } catch(err) {
            console.log("verify error : ", err);
            return err;
        }
    }
}