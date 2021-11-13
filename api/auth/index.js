const express = require('express');
const authController = require('../auth/authController')
const router = express.Router();
router.post('/google-sign-in', authController.googleSignIn)

router.post('/facebook-sign-in', authController.facebookSignIn)
module.exports = router;