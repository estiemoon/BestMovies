const express = require('express');
const router = express.Router();

const conn = require('../db/mariadb');
const { auth } = require('../middleware/auth');

//수상작 별, 연도 별 영화 조회
router.get('/',
    auth,
    (req,res) => {

    const { year, award } = req.query;

    const sql = `SELECT * FROM award_movies
                WHERE year = ? AND award = ?`;
    const values = [year, award]  
    conn.query(sql, values, (err,result) => {
        if(err) {
            console.log(err)
            res.status(404).json({message: 'Not found'});
        }
        res.status(200).json(result);
    })
})

module.exports = router;