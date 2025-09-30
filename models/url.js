// we are creating database schema here

const mongoose = require('mongoose');


// create schema
const urlSchema = new mongoose.Schema({
   shortId:{
   type: String,
   required: true,
   unique: true,
   },
   
   // originalURL
   redirectUrl:{
    type: String,
    required: true,
   },

   visitHistory: [{timestamp:{type: Number}}],
   createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
   }
},
{timestamps: true}
);

// create model
const URL = mongoose.model("url", urlSchema);

// export model
module.exports = URL;