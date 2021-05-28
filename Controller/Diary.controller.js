const mongoose = require('mongoose');
const Diary = require('../Model/Diary.model')


exports.postDiary = async (req, res, next) => {
    const diary = new Diary({
        title: req.body.title,
        description: req.body.description,
        owner: req.user._id
    })
    try {
        const item = await diary.save();


        res.send({
            message: 'diary saved successful',
            data: item
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

exports.getDiary = async (req, res, next) => {
    const diary = await Diary.find({}).then((diary) => {
        res.send(diary)
    })
}
exports.getOneDiary = async (req, res, next) => {
    const _id = req.params.id
    try {
        const diary = await Diary.findOne({ _id, owner: req.user._id })

        if (!diary) {
            res.status(404).send('no diary found')
        }
        res.send({
            message: 'operation successful',
            diary: {
                diary
            }
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}
exports.deleteDiary = async (req, res) => {
    try {
        const diary = await Diary.findOne({ _id: req.params.id, owner: req.user._id })
        if (!diary) {
            res.send('diary not found')
        }
        res.send({
            message: "deleted successful",
            diary: diary
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

exports.updateDiary = async (req, res) => {
    const diary = new Diary({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
    })

  Diary.updateOne({ _id: req.params.id }, diary).then(() => {
            res.status(201).send({
                message: 'Diary updated successfully'
            });
        }).catch((error) => {
            res.status(400).json({
                error: error
            });
        })
    }
