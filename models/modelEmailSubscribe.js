const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')

function validator (v) {
  return v.length < 50 && v.length > 5;
};


// model MainCategory
const EmailSchema = new mongoose.Schema({
 email:{type:String,validate: [validator, 'my error type']},
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