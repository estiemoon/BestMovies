const express = require('express');
const router = express.Router();

router.use(express.json());

const conn = require('../db/mariadb');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {sign} = require('../middleware/jwt-utils');
const dotenv = require('dotenv');
dotenv.config();

//join
router.post('/join', (req, res)=> {
    const {email, password, username} = req.body;

    const salt = crypto.randomBytes(64).toString('base64');
    const hashPwd = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('base64');

    const sql = `   INSERT INTO users (email, salt, hashPwd, username)
                    VALUES (?, ?, ?, ?)`;
    const values = [email, salt, hashPwd, username];

    conn.query(sql, values, (err,result) => {
        if(err){
            console.log(err);
            res.json({
                message : 'User creation failed'
            })
        }
        res.status(201).json({
            messsage : 'User created',
            result : result
        })

    })
})

//login
router.post('/login', (req,res) => {
    const {email, password} = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    const values = [email];
    conn.query(sql,values, (err, result) => {
        if(err){
            console.log(err);
            res.json({
                message : 'User creation failed'
            })
        } 
        const user = result[0];
        const getHashPwd = crypto.pbkdf2Sync(password, user.salt, 100000, 64, 'sha512').toString('base64');
        if (user) {
            if(user.hashPwd == getHashPwd) {
                //jwt 발행
                const token = sign(user);
                res.cookie('token', token, {httpOnly : true}); //httpOnly : true -> js에서 쿠키 접근 불가

                res.status(200).json({
                    message : 'Login success'
                })
            } else {
                res.status(401).json({
                    message : 'Login failed'
                })
            }
        } else {
            res.status(401).json({
                message : 'User not found'
            })
        }
    })
})

//logout?

module.exports = router;