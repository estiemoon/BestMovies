const conn = require('../db/mariadb');
const {StatusCodes} = require('http-status-codes');

const createUser = async (sql,values,res) => {
    try{
        const [result] = await (await conn).query(sql, values);
        return result;
    } catch (err) {
        console.log("loginUser-model err", err);
        return res.status(StatusCodes.BAD_REQUEST)
                .json({
                    "error message" : err.message
                });
    }
}

const loginUser = async (sql, values, res) => {
    try {
        const [result,field] = await (await conn).query(sql,values);
        return result;

    } catch (err) {
        console.log("loginUser-model err",err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
} 

const addRefresh = async (sql,values,res) => {
    try {
        const [result] = await (await conn).query(sql, values);
        return result;
    } catch (err) {
        console.log("addRefresh-model err",err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const getRefresh = async (sql,values) => {
    try {
        const [result] = await (await conn).query(sql, values);
        return result;
    } catch (err) {
        console.log("getRefresh-model err",err);
        return false;
    }
}

module.exports = {createUser, loginUser, addRefresh, getRefresh}