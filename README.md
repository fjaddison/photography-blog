# photography-blog (imagini)

## Developer
Francis Julian Addison

## Description
An image sharing site geared towards photographers critiquing each other, although comments and users are not yet enabled.

## Features
CRUD functionality
upload, update, delete, render images

## Future Features
comments
users
authentication
facebook, google, github login etc.

## Entities

```
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
```
## Future Entities
```
const User = new mongoose.Schema({
    local: {
      email: String,
      password: String
    }
})

const CommentSchema = new mongoose.Schema({
    comment: String,
    by: String
})
```
## Technologies Used
Mongoose, Express, Handlebars, Node.JS, MongoDB, Heroku, MLAB

## Installation
None required. View the deployed [Heroku](https://polar-meadow-82770.herokuapp.com/) demo, or for and clone from the [repo](https://github.com/fjaddison/photography-blog)

##Contribution
Is more than welcome.

## Sources/Inspiration
1. [When Presidents - GA](https://git.generalassemb.ly/ga-wdi-exercises/whenpresident/)
2. Make School - Editing and Updating a Resource [Edit Route: Editing and Updating a Resource](https://www.makeschool.com/academy/tutorial/Q29ob3J0LTE5Ng==/rotten-potatoes-movie-review-site-5dcaad7e-6b68-46ca-bf0e-5c2514d78faa/edit-route-editing-and-updating-a-resource-41eed9e7-7bb8-4d16-b2a0-9c8572d0da67)
3. [MEHN LAB - GA & much help from Brian Reynolds](https://git.generalassemb.ly/brikrey67/mehn-lab)
4. [Udemy - Node.js, Express & MongoDB Dev to Deployment - Brad Traversy](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/learn/v4/overview)
