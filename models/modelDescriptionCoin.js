const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Date = mongoose.Schema({
  year: {type: Number},
  month: {type: Number},
  day: {type: Number},
  
})

const DescriptionCoinSchema =  new mongoose.Schema({
      category:{type: String},
      text:{type: String},
  },
  { timestamps: true },
)

// Creating model objects
DescriptionCoinSchema.plugin(mongoosePaginate);
// declare a mongoose document based on a Typescript interface representing your schema
const  DescriptionCoin = mongoose.model(" DescriptionCoin",  DescriptionCoinSchema);

module.exports =  DescriptionCoin;