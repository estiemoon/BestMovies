const express = require('express');
const router = express.Router();
router.use(express.json());
const { ensureAuthorization } = require('../middleware/auth');

const {
    showReviewController,
    addReviewController,
    removeReviewController
                            } = require('../controllers/reviewController');

router.get('/', ensureAuthorization, showReviewController);

router.post('/', ensureAuthorization, addReviewController);

router.delete('/', ensureAuthorization, removeReviewController);

module.exports = router;