const {alterReview, getReview}  = require('../models/reviewModel')
const {StatusCodes} = require('http-status-codes')

const addReview = async (values, res) => {
    try{
        const sql = `INSERT INTO reviews (user_id, movie_id, contents, rating )
                    VALUES (?, ?, ?, ?)`
        const result = await alterReview(sql, values, res);

        return result;
    } catch (err) {
        console.log("addReview-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const changeReview = async (values, res) => {
    try{
        const sql = `UPDATE reviews SET contents = ?, rating = ? WHERE user_id = ? AND movie_id = ?`
        const result = await alterReview(sql, values, res);
        return result;
    } catch (err) {
        console.log("changeReview-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).json({
            message : err.message
        });
    }
}

const removeReview = async (values, res) => {
    try{
        const sql = `DELETE FROM reviews WHERE user_id = ? AND movie_id = ?`
        const result = await alterReview(sql, values, res);
        if (result.affectedRows === 0) {
            throw new Error("No bookmark to delete");
        }
        return result;
    } catch (err) {
        console.log("addReview-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).json({
            message : err.message
        });
    }
}

const showReview = async (values, res) => {
    try{
        const sql = `SELECT * FROM reviews WHERE movie_id = ?`
        await getReview(sql, values, res);

    } catch (err) {
        console.log("showReview-service err", err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

module.exports = {addReview, removeReview, showReview, changeReview}