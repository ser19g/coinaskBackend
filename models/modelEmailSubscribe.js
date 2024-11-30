const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const EmailSchema = new mongoose.Schema({
 email:{type:String},
},{ timestamps: true },)

if(this.title){
  EmailSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}


const Email = mongoose.model("Email", EmailSchema);

module.exports = Email;