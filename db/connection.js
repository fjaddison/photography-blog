//this is just importing mongoose 
const mongoose = require('mongoose')

const dataBase = require('../config/database')

mongoose
  .connect(dataBase.mongoURI, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

mongoose.Promise = Promise

module.exports = mongoose
