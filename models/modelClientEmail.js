const mongoose = require("mongoose");



// model MainCategory
const ClientEmailSchema = new mongoose.Schema({
  email: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const ClientEmail = mongoose.model("ClientEmail", ClientEmailSchema);

module.exports = ClientEmail;