const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const MessageSchema = new mongoose.Schema({
  name: {type:String},
  email:{type:String},
  formats:{type:String},
  message:{type:String},
  
  
},{ timestamps: true },)

if(this.title){
  MessageSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}


const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;