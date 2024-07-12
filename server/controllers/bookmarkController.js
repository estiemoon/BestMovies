const {addBM, removeBM, showBM} = require('../services/bookmarkService');

const addBMController = async (req, res) => {
    if(!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else{
        const {movie_id} = req.body
        try{
            const result = await addBM(req.user.email, movie_id, res)
            res.json({
                message : "북마크 추가 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("addBMController err", err);
            res.status(400).end();
        }
    }
}

const removeBMController = async (req,res) => {
    if(!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id} = req.body
        try{
            const result = await removeBM(req.user.email, movie_id, res)
            res.json({
                message : "북마크 삭제 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("removeBMController err", err);
            res.status(400).end();
    }
}
}

const showBMController = (req,res) => {
    if(!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else {
        try{
            showBM(req.user.email, res)
        } catch(err) {
            console.log("showBMController err", err);
            res.status(400).end(); 
    }
}
}

module.exports = {addBMController,removeBMController,showBMController};