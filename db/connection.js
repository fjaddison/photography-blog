//linking mongoose to the locally seeded database
const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.MLAB_URL);
  } else {
    mongoose.connect('mongodb://localhost/photo-blog', { useMongoClient: true });
}

mongoose.Promise = Promise

module.exports = mongoose
