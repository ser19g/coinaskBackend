const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const FooterSchema = new mongoose.Schema({
  text: {type: String},
  youtube: {type: String},
  instagram : {type: String},
  facebook: {type: String},
  blog : {type: String},
  adres : {type: String},
  phone : {type: String},
  email : {type: String},
  baner : [{type: String}],
})


 


// Creating model objects
const Footer = mongoose.model("Footer", FooterSchema);

module.exports = Footer;