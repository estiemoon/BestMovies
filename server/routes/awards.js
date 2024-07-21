const express = require('express');
const router = express.Router();
router.use(express.json());

const conn = require('../db/mariadb');
const {StatusCodes} = require('http-status-codes');

//수상작 별, 연도 별 영화 조회

router.get('/',
    async (req,res) => {
        const { year, award } = req.query;

        let sql = `SELECT (movie_id) FROM award_movies`;
        let values = [];

        if (year && award){
            sql += ` WHERE year = ? AND award = ?`;
            values = [year, award]  
        } else if (year) {
            sql += ` WHERE year = ?`;
            values = [year]
        } else if (award) {
            sql += ` WHERE award = ?`;
            values = [award]
        }

        try{
            const [result] = await (await conn).query(sql, values)
            res.status(StatusCodes.OK).json(result);

        } catch(err) {
            console.log("get awards error",err.name);
            res.status(StatusCodes.BAD_REQUEST).end();
        }
})

module.exports = router;