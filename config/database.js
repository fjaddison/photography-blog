if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://julian:woodships@ds251197.mlab.com:51197/photo-blog-prod' }
} else {
  module.exports = { mongoURI: 'mongodb://localhost/photo-blog' }
}
