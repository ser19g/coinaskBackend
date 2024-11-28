const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Date = mongoose.Schema({
  year: {type: Number},
  month: {type: Number},
  day: {type: Number},
  
})

const Animals = mongoose.Schema({
  clientId:{ type: String },
  name :{ type: String},
  image :[{type: String}],
  pol :{ type: String },
  rod :{ type: String },
  poroda :{ type: String },
  active:{type: String},
},{ timestamps: true },)

const Profile = mongoose.Schema({
  name: {type: String},
  city: {type: String},
  email: {type:String},
  phone: {type:String},
  phone2: {type:String},
})

const ClientBoxSchema =  new mongoose.Schema({
  _uidFirebase: { type: String },
  _email: { type: String },
  _city: { type: String },
  _phone: { type: String },
  _animals: [{ type: Animals }],
  _profil: { type: Profile },
  },
 
    { timestamps: true },
)

ClientBoxSchema.plugin(mongoosePaginate);

const ClientBox = mongoose.model("ClientBox", ClientBoxSchema);

module.exports = ClientBox;