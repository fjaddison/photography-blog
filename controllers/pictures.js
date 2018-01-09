const mongoose  = require('../models/schema')
// assign schema (defibned in schema.js) to variable
const Pictures = mongoose.model('Pictures') // file extention not required

const Router    = require('express').Router()
Router.get('/', (req, res) => {
    Pictures.find({})
    .then(picturesData => {
      res.render("pictures-index", {
        pictures: picturesData
      });
    })
    .catch(err => {
      console.log(err);
    });
  })

// const express = require("express");
// const passport = require("passport");

// const Pictures = require("../models/schema");
// // assign schema (defined in schema.js) to variable

// function picturesGetAll(request, response) {
//   Pictures.find({})
//     .then(newsData => {
//       response.render("pictures-index", {
//         pictures: picturesData
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = Router
