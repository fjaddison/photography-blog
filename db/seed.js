//process to clear database and push the prepopulated seeds.json file into 
// the mongoDB

const Pictures = require('../models/schema')
const seedData = require('./seeds.json')

Pictures.remove({})
  .then(() => {
    return Pictures.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
})

