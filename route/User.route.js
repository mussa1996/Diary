const express = require('express');
const router = express.Router();
const userCtrl = require('../Controller/User.controller')
const auth = require('../middleware/auth')
router.post('/',userCtrl.createUser)
router.post('/login',userCtrl.loginUser)
router.post('/logout',auth,userCtrl.logout)

module.exports = router;