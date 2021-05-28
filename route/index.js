const express = require('express');
const router = express.Router();
const diaryRoutes = require('./Diary.route')
const userRoutes = require('./User.route')

router.use('/diary',diaryRoutes)

router.use('/user',userRoutes)

module.exports=router;