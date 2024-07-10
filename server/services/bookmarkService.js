const {alterBM,getBM} = require('../models/bookmarkModel');
const {StatusCodes} = require('http-status-codes');


const addBM = async (userId, movieId, res) => {

    try{
        const sql = `INSERT INTO bookmarks (user_id, movie_id) VALUES (?, ?)`;
        const values = [userId, movieId];
        const result = await alterBM(sql, values,res);

        return result;
    } catch (err) {
        console.log("addBM-service err", err);

        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const removeBM = async (userId, movieId, res) => {
    try{
        const sql = `DELETE FROM bookmarks WHERE user_id = ? AND movie_id = ?`;
        const values = [userId, movieId];
        const result = await alterBM(sql, values,res);
        return result;
    } catch(err) {
        console.log("removeBM-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const showBM = async (userId, res) => {
    try{
        const sql = `SELECT movie_id FROM bookmarks WHERE user_id = ?`;
        const values = [userId];
        await getBM(sql, values, res);

    } catch(err) {
        console.log("showBM-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

module.exports = {addBM, removeBM, showBM}