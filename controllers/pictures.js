const mongoose = require('../models/schema')
// assign schema (defined in schema.js) to variable
const Pictures = mongoose.model('Pictures') // file extention not required

const Router = require('express').Router()

// main page route. Would ideally like the /pictures route to be the index
Router.get('/', (req, res) => {
  Pictures.find({})
    .then(picturesData => {
      res.render('pictures-index', {
        pictures: picturesData
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// routes to individual image
Router.get('/:title', (req, res) => {
  Pictures.findOne({title: req.params.title}).then(picture => {
    res.render('pictures-show', picture)
  })
})

// submit new image
Router.post('/', (req, res) => {
  Pictures.create(req.body.pictures)
      .then(pictures => {
        res.redirect(`/pictures`)
      })
      .catch(err => {
        console.log(err)
      })
})

// update image name
Router.put('/:title', (req, res) => {
  Pictures.findOneAndUpdate({ title: req.params.title }, req.body.pictures, {
    new: true
  })
        .then(pictures => {
          res.redirect(`/pictures/${pictures.title}`)
        })
        .catch(err => {
          console.log(err)
        })
})

// Router.delete('/:id', (req, res) => {
//     Pictures.findOneAndRemove({ _id: req.params.id }, req.body).then(pictures =>
//       Pictures.find({}).then(pictures => {
//         res.redirect('/pictures')
//       })
//     )
// })

Router.delete('/:title', (req, res) => {
  Pictures.findOneAndRemove({ title: req.params.title })
      .then(() => {
        res.redirect('/pictures')
      })
      .catch(err => {
        console.log(err)
      })
})

module.exports = Router
