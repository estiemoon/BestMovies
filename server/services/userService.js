const { createUser,
        loginUser,
        addRefresh
                    } = require('../models/userModel'); 
const crypto = require('crypto');
const {sign,refresh} = require('../middleware/jwt-utils');
const { StatusCodes } = require('http-status-codes');
 

const join = async (userInfo, res) => {
    try {
        const {email, password, username} = userInfo;
        const salt = crypto.randomBytes(64).toString('base64');
        const hashPwd = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('base64');
    
        const sql =`INSERT INTO users (email, salt, hashPwd, username)
                    VALUES (?, ?, ?, ?)`;
        const values = [email, salt, hashPwd, username];
        const result = await createUser(sql,values,res);
        res.status(StatusCodes.CREATED).json({
            "message" : "회원가입 성공",
            "result": result
        });

    } catch (err) {
        console.log("service_join", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
    
}

const login = async (userInfo,res) => {
    try {
        const {email, password} = userInfo;

        const sql = `SELECT * FROM users WHERE email = ?`;
        const values = [email];
        const result = await loginUser(sql,values,res);
        const user = result[0];

        if (user) {
            const getHashPwd = crypto.pbkdf2Sync(password, user.salt, 100000, 64, 'sha512').toString('base64');
            if(user.hashPwd == getHashPwd) {
                const token = sign(user);
                const refreshToken = refresh();
                res.cookie('refresh', refreshToken,{httpOnly : true});
    
                const sql = `UPDATE users SET refresh = ? WHERE email = ?`;
                const values = [refreshToken, user.email];
                const createRefresh = await addRefresh(sql,values,res);

                res.status(200).json({
                    token : token,
                    refresh : createRefresh,
                    message : 'Login success'
                });
                
            } else {
                throw ReferenceError
            }
        } else {
            throw ReferenceError
        }


    } catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({
            "message" : "아이디나 비밀번호가 잘못되었습니다"
        });
    }
}


module.exports = {join, login};