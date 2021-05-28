const express = require('express');
const router = express.Router();
const diaryCtrl = require('../Controller/Diary.controller')
const auth = require('../middleware/auth')

router.post('/',auth,diaryCtrl.postDiary);
router.get('/',auth,diaryCtrl.getDiary);
router.get('/:id', auth,diaryCtrl.getOneDiary);
router.patch('/:id',auth, diaryCtrl.updateDiary);
router.delete('/:id',auth, diaryCtrl.deleteDiary);

module.exports = router;