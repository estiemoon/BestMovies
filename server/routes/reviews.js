const express = require('express');
const router = express.Router();
router.use(express.json());
const { ensureAuthorization } = require('../middleware/auth');
const { body,param } = require('express-validator');
const {validFunc} = require('../middleware/validation');

const {
    showReviewController,
    addReviewController,
    removeReviewController,
    changeReviewController
                            } = require('../controllers/reviewController');

router.get('/:movie_id',
            [
                param('movie_id').notEmpty().withMessage('movie_id params가 필요합니다'),
            ],
            showReviewController);

router.post('/', 
            [
                body('movie_id').notEmpty().isInt().withMessage('movie_id가 필요합니다. or integer'),
                body('content').notEmpty().withMessage('content가 필요합니다'),
                body('rating').notEmpty().isInt().withMessage('rating가 필요합니다 or integer'),
                validFunc
            ],
            ensureAuthorization, 
            addReviewController);

router.delete('/:movie_id', 
            [
                param('movie_id').notEmpty().isInt().withMessage('movie_id must be an integer'),
                validFunc
            ],
            ensureAuthorization, 
            removeReviewController);

router.put('/',
            [
                body('movie_id').notEmpty().isInt().withMessage('movie_id must be an integer'),
                body('content').notEmpty().withMessage('content must be provided'),
                body('rating').notEmpty().isInt().withMessage('rating must be an integer'),
                validFunc
            ],
            ensureAuthorization,
            changeReviewController);   

module.exports = router; 