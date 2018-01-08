const mongoose = require('../db/connection')
let date = new Date()

const CommentSchema = new mongoose.Schema({
    comment: String,
    by: String
})

const PicturesSchema = new mongoose.Schema({
    picture: String,
    desc: String,
    dateCommented: Date,
    addedComment: [CommentSchema]
})

const Pictures = mongoose.model('Pictures', PicturesSchema)

module.exports = Pictures
