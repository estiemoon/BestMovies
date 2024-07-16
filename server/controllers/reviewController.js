const {addReview, removeReview, showReview,changeReview} = require('../services/reviewService')
const {StatusCodes} = require('http-status-codes')

const addReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id, content, rating} = req.body
        try {
            const values = [req.user.email, movie_id, content, rating]
            const result = await addReview( values, res)
            res.status(StatusCodes.CREATED).json({
                message : "리뷰 추가 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("addReviewController err", err);
            res.status(StatusCodes.BAD_REQUEST).end();
        }
    }
}

const changeReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id, content, rating} = req.body
        try {
            const values = [content, rating, req.user.email, movie_id]
            const result = await changeReview(values, res)
            res.status(StatusCodes.OK).json({
                message : "리뷰 수정 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("changeReviewController err", err);
            res.status(StatusCodes.BAD_REQUEST).end();
        }
    }
}

const removeReviewController = async (req,res) => {
    if (!req.isAuthenticated) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message : "로그인이 필요합니다."
        })
    } else {
        const {movie_id} = req.body
        try {
            const values = [req.user.email, movie_id]
            const result = await removeReview(values, res)
            res.res.status(StatusCodes.OK).json({
                message : "리뷰 삭제 성공!",
                user : req.user.email,
                movie: movie_id,
                result : result,
            })
        } catch(err) {
            console.log("removeReviewController err", err);
            res.status(StatusCodes.BAD_REQUEST).end();
        }
    }
}

const showReviewController = async (req,res) => {

    const movie_id = req.params.id
    try {
        const values = [movie_id]
        await showReview(values, res)
    } catch(err) {
        console.log("showReviewController err", err);
        res.status(StatusCodes.BAD_REQUEST).end();
    }

}

module.exports =  {
                    showReviewController,
                    addReviewController,
                    removeReviewController,
                    changeReviewController
                }