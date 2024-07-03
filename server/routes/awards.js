const express = require('express');
const router = express.Router();

const conn = require('../db/mariadb');
const { ensureAuthorization } = require('../middleware/auth');

//수상작 별, 연도 별 영화 조회
//ensureauthorization 시도 - 지워야함
router.get('/',
    ensureAuthorization,
    (req,res) => {

    if (req.isAuthenticated){

        const { year, award } = req.query;

        const sql = `SELECT * FROM award_movies
                    WHERE year = ? AND award = ?`;
        const values = [year, award]  
        conn.query(sql, values, (err,result) => {
            if(err) {
                console.log(err)
                return res.status(404).json({message: 'Not found'});
            } else {
                return res.status(200).json(result);
            }
        })

    } else {
        return res.status(401).end();
    }
})

module.exports = router;