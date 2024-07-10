const {addReview, removeReview, showReview} = require('../services/reviewService')

const addReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id, content, rating} = req.body
        try {
            const values = [req.user.email, movie_id, content, rating]
            const result = await addReview( values, res)
            res.json({
                message : "리뷰 추가 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("addReviewController err", err);
            res.status(400).end();
        }
    }
}

const removeReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id} = req.body
        try {
            const values = [req.user.email, movie_id]
            const result = await removeReview(values, res)
            res.json({
                message : "리뷰 삭제 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("removeReviewController err", err);
            res.status(400).end();
        }
    }
}

const showReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(401).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id} = req.body
        try {
            const values = [req.user.email, movie_id]
            await showReview(values, res)
        } catch(err) {
            console.log("showReviewController err", err);
            res.status(400).end();
        }
    }
}

module.exports =  {
                    showReviewController,
                    addReviewController,
                    removeReviewController
                }