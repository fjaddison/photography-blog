const mongoose  = require('../models/schema')
// assign schema (defibned in schema.js) to variable
const Pictures = mongoose.model('Pictures') // file extention not required

const Router    = require('express').Router()

Router.get('/', (req, res) => {
    Pictures.find({})
    .then(picturesData => {
      res.render('pictures-index', {
        pictures: picturesData
      })
    })
    .catch(err => {
      console.log(err);
    });
})

Router.get('/pictures/:title', (req, res) => {
    Pictures
    .findOne({title: req.params.title})
    .then(picture => {
      res.render('pictures-show', { picture })
    })
})

module.exports = Router
