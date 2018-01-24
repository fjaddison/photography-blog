//process to clear database and push the prepopulated seeds.json file into 
// the mongoDB

const Pictures = require('../models/schema')
const seedData = require('./seeds.json') //add more seeds to seeds.json. you have a bunch of images in your public folder and so you might try adding in a relative url to the image, 

// Can rewrite
Pictures.remove({})
  .then(() => Pictures.collection.insert(seedData))
  .then(() => process.exit())
