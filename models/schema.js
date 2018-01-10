const mongoose = require('../db/connection')
let date = new Date()

const CommentSchema = new mongoose.Schema({
    comment: String,
    by: String
})

const PicturesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pic: String,
    desc: String,
    date: {
        type: Date,
        default: Date.now 
    },
    addedComment: [CommentSchema]
})

const Pictures = mongoose.model('Pictures', PicturesSchema)

module.exports = Pictures
