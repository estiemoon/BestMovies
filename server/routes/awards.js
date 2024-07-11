const express = require('express');
const router = express.Router();
router.use(express.json());

const conn = require('../db/mariadb');

//수상작 별, 연도 별 영화 조회

router.get('/',
    async (req,res) => {
        const { year, award } = req.query;

        const sql = `SELECT * FROM award_movies
                    WHERE year = ? AND award = ?`;
        const values = [year, award]  

        try{
            const [result] = await (await conn).query(sql, values)
            res.status(200).json(result);

        } catch(err) {
            console.log("get awards error",err.name);
            res.status(404).end();
        }
})

module.exports = router;