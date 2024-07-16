const conn = require('../db/mariadb');
const {StatusCodes} = require('http-status-codes');

const alterBM = async (sql, values, res) => {
    try{
        const [result] = await (await conn).query(sql,values);
        return result;

    } catch(err){
        console.log("alterBM-model err",err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const getBM = async (sql, values, res) => {
    try {
        const [result,fields] = await (await conn).query(sql,values);
        return res.status(StatusCodes.OK).json(result);

    } catch(err) {
        console.log("getBM-model err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}


module.exports = {alterBM,getBM} 