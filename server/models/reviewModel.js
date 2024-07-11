const conn = require('../db/mariadb');
const {StatusCodes} = require('http-status-codes');

const alterReview = async(sql, values, res) => {
    try {
        const [result] = await (await conn).query(sql,values);
        return result;
    } catch(err) {
        console.log("alterReview-model err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();}
}

const getReview = async (sql,values,res) => {
    try{
        const [result, fields] = await (await conn).query(sql,values);
        return res.status(StatusCodes.OK).json(result);
        
    } catch(err) {
        console.log("getReview-model err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();}

}




module.exports = {alterReview, getReview}