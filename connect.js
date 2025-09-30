// connecting mongoose to mongodb

const mongoose = require('mongoose');

async function connectMongooseToMongoDB(url){
  return mongoose.connect(url);
}

module.exports = {connectMongooseToMongoDB};