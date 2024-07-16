const {validationResult} = require('express-validator');
const {StatusCodes} = require('http-status-codes');

const validFunc = (req,res,next) => {
    const err = validationResult(req);
    if (err.isEmpty()){
        return next();
    } else {
        res.status(StatusCodes.BAD_REQUEST).json(err.array());
    }
}

module.exports = {validFunc};