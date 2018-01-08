//linking mongoose to the locally seeded database
const mongoose = require('mongoose')

// if (process.env.NODE_ENV == 'production') {
//     mongoose.connect(process.env.MLAB_URL);
//   } else {
//     mongoose.connect('mongodb://localhost/photo-blog', { useMongoClient: true });
// }

const mongoUri = 'mongodb://localhost/photo-blog'

mongoose
  .connect(mongoUri, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
  .catch(connectionError => console.log('Connection failed!', connectionError))


mongoose.Promise = Promise

module.exports = mongoose
