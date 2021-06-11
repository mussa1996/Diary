const express = require('express');
const router = express.Router();
const userCtrl = require('../Controller/User.controller')
const auth = require('../middleware/auth')
router.post('/',userCtrl.createUser)
router.post('/login',userCtrl.loginUser)
router.post('/logout',auth,userCtrl.logout)
router.put('/forgetpassword',userCtrl.forgetPassword)
router.put('/resetpassword',userCtrl.resetPassword)
router.delete('/delete/:id',userCtrl.deleteUser)
router.post('/email-activate',userCtrl.activateAccount)

module.exports = router;