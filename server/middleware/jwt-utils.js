const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const {getRefresh} = require('../models/userModel');

module.exports = {
    sign : (user) => {
        return jwt.sign(
            {
                "username" : user.username, 
                "email": user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn : '30 mins',
                issuer : 'moon'
            })
        },

    verify : (token) => {
        try{
            const user = jwt.verify(token, process.env.JWT_SECRET);
            return {
                ok : true,
                user,
            }
        } catch (err) { //만료시, token error시??
            return {
                ok: false,
                message: err.message
            };
        }
        
    },
    refresh : () => {
        return jwt.sign(
            {},
            process.env.REFRESH_SECRET,
            {
                expiresIn : '1 days',
                issuer : 'moon'
            })
    },
    refreshVerify : async (email, receivedRefresh) => {
        try {
            const sql = `SELECT refresh FROM users WHERE email = ? `
            const values = email 
            const [result] = await getRefresh(sql,values); 
     
            if(result.refresh == receivedRefresh) { 
                try{
                    const refreshResult = jwt.verify(receivedRefresh,process.env.REFRESH_SECRET);
                    console.log("refreshresult", refreshResult);
                    return {
                        ok : true
                    }
                } catch (err) {
                    //refresh 만료, 에러 모두 여기로 => ??
                    return {
                        ok :false,
                        message : err.message
                    }
                }
            } else {
                throw new Error("refresh token이 일치하지 않습니다.");
            }
        } catch(err) {
            console.log(err)
            return {
                ok :false,
                message : err.message
            }
        }
    }
};