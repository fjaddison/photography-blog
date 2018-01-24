// In general, don't leave commented our code

const methodOverride = require('method-override')
const mongoose       = require('../models/schema') // assign schema (defined in schema.js) to variable
const Pictures       = mongoose.model('Pictures') // file extention not required

const Router         = require('express').Router()

// main page route. Would ideally like the /pictures route to be the index
Router.get('/', (req, res) => {
  Pictures
    .find({})
    .then(pictures => res.render('pictures-index', {pictures}))
    .catch(err => console.log(err))
    // for error handling, you can also do something like the commented out example below,
    // .catch(err => res.status(500).send('500 Internal server error')
})

// routes to individual image
Router.get('/:title', (req, res) => {
  Pictures
    .findOne({title: req.params.title})
    .then(picture => res.render('pictures-show', picture))// might be {picture}
    //add catch here
})

// submit new image
Router.post('/', (req, res) => {
  Pictures
    .create(req.body.pictures)
    .then(pictures => res.redirect(`/pictures`))
    .catch(err => console.log(err))
})

// update image name
Router.put('/:title', (req, res) => {
  Pictures
    .findOneAndUpdate({ title: req.params.title }, req.body.pictures, { new: true })
    .then(pictures => res.redirect(`/pictures/${pictures.title}`))
    .catch(err => console.log(err))
})

// To set this up to work with mongodb ids, you'll need to add links in your views that read the `_id` property from the database: see comment in pictures-index.hbs

// Router.delete('/:id', (req, res) => {
//     Pictures.findOneAndRemove({ _id: req.params.id }, req.body).then(pictures =>
//       Pictures.find({}).then(pictures => {
//         res.redirect('/pictures')
//       })
//     )
// })

Router.delete('/:title', (req, res) => {
  Pictures
    .findOneAndRemove({ title: req.params.title })
    .then(() => res.redirect('/pictures'))
    .catch(err => console.log(err))
})

module.exports = Router
