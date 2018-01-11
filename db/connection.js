//linking mongoose to the locally seeded database
const mongoose = require('mongoose')

// if (process.env.NODE_ENV == 'production') {
//     mongoose.connect(process.env.MLAB_URL);
//   } else {
//     mongoose.connect('mongodb://localhost/photo-blog', { useMongoClient: true });
// }

const dataBase = require('../config/database')

const mongoUri = 'mongodb://localhost/photo-blog'

mongoose
  .connect(dataBase.mongoURI, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))


mongoose.Promise = Promise

module.exports = mongoose
