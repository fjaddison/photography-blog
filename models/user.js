const mongoose = require('../db/connection')

var bcrypt = require('bcrypt-nodejs')

const User = new mongoose.Schema({
    local: {
      email: String,
      password: String
    }
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}


