const express = require('express');
const router = express.Router();
router.use(express.json());

const {execRefresh} = require('../middleware/refresh');
const { joinController,
        loginController
                        } = require('../controllers/userController');
//join
router.post('/join', joinController);

//login
router.post('/login', loginController);

//refresh
router.post('/refresh', execRefresh);
//logout?

module.exports = router;