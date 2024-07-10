const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const ensureAuthorization = (req,res,next) => {
    try{
        const receivedToken = req.headers.authorization;

        if (receivedToken) {
            const user = jwt.verify(receivedToken, process.env.JWT_SECRET)
            req.isAuthenticated = true;
            req.user = user;
            console.log('req.user:', req.user)
            next();
        } else {
            throw new ReferenceError('jwt must be provided!')
        }
    } catch (err) {
        req.isAuthenticated = false;
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message : "로그인 세션 만료. 다시 로그인 하세요."
            })
        } else if (err instanceof jwt.JsonWebTokenError) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message : "잘못된 토큰입니다."
            })
        } else if (err instanceof ReferenceError) {
            next();
        }
    }
}


module.exports = {ensureAuthorization};