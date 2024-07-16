const express = require('express');
const {body,header} = require('express-validator');
const router = express.Router();
router.use(express.json());

const {execRefresh} = require('../middleware/refresh');
const {validFunc} = require('../middleware/validation');
const { joinController,
        loginController
                        } = require('../controllers/userController');
//join
router.post('/join',
    [
        body('email').isEmail().withMessage('이메일 형식이 아닙니다.'),
        body('password').isLength({min:8}).withMessage('비밀번호는 8자 이상이어야 합니다.'),
        body('username').notEmpty().withMessage('username을 입력해주세요.'),
        validFunc
    ],
    joinController);

//login
router.post('/login',
    [
        body('email').notEmpty().withMessage('이메일을 입력해주세요.'),
        body('password').notEmpty().withMessage('비밀번호를 입력해주세요.'),
        validFunc
    ],
     loginController);

//refresh
router.post('/refresh', 
    [
        body('username').notEmpty().withMessage('username을 입력해주세요.'),
        body('email').notEmpty().withMessage('email을 입력해주세요.'),
        header('authorization').notEmpty().withMessage('acess token이 존재하지 않습니다.'),
        header('refresh').notEmpty().withMessage('refresh token이 존재하지 않습니다.'),
        validFunc
    ],
    execRefresh);

module.exports = router; 