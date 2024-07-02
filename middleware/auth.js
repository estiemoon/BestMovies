const {verify} = require('../middleware/jwt-utils');

const auth = (req,res) => {
    const token = req.headers.authorization;
    console.log(token)

    if(!token){
        res.status(401).json({
            message : 'token이 존재하지 않습니다. Unauthorized'
        })
    } else {
        try{
            const user = verify(token);
            if(user){
                req.user = user;
                next();
            } else {
                return res.status(401).json({
                    message : 'Unauthorized2'
                })
            }
        } catch(err) {
            return res.status(401).json({
                err : err,
                message : 'Unauthorized3'
            })
        }
    }

}


module.exports = {auth};