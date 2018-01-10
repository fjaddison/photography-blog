const mongoose  = require('../models/schema')
// assign schema (defibned in schema.js) to variable
const Pictures = mongoose.model('Pictures') // file extention not required

const Router    = require('express').Router()

// main page route. Would ideally like the /pictures route to be the index
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

// routes to individual image
Router.get('/:title', (req, res) => {
    Pictures.findOne({title: req.params.title}).then(picture => {
        res.render('pictures-show', picture)
    })
})

Router.post('/submit', (req, res) => {
    Pictures.create(req.body.pictures)
      .then(pictures => {
        res.redirect(`/pictures`);
      })
      .catch(err => {
        console.log(err);
      });
  })

module.exports = Router
