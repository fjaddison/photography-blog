const mongoose = require('../db/connection')
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
    addedComment: [CommentSchema] //i'd call this key 'comments'
    // can add
    // , {strict: false} or remove fields if you dont want to fill in place holders for dates
    // http://mongoosejs.com/docs/guide.html#strict
})


//Models tend to be singular as a naming convention
const Pictures = mongoose.model('Pictures', PicturesSchema)

module.exports = Pictures
