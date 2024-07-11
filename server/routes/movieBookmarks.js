const express = require('express');
const router = express.Router();
router.use(express.json());
const {addBMController,
    removeBMController,
    showBMController
} = require('../controllers/bookmarkController');
const { ensureAuthorization } = require('../middleware/auth');

router.get('/', ensureAuthorization, showBMController)

// 로그인하면 authroization으로 req.user -> id(user_id)받아오고
// movie_id는 req.body로 받아온다. (프론트가 보내주기)
router.post('/', ensureAuthorization, addBMController);

router.delete('/', ensureAuthorization, removeBMController)


module.exports = router;