const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const RegulationSchema = new mongoose.Schema({
  status: {type:String},
  category:{type:String},
  author:{type:String},
  img_author:{type:String},
  title: {type: String},
  slug: {type: String},
  text : {type: String},
  short_description : {type: String},
  image_title: [{type: String}],
  seo_keywords: {type:String},
  seo_description: {type:String},
  top: {type: Boolean,set: a => a === '' ? undefined : a},
  popular: {type: Boolean,set: a => a === '' ? undefined : a},
  latest: {type: Boolean,set: a => a === '' ? undefined : a},
  icon:[{type:String}],
  bigImageArticle:{type: Boolean,set: a => a === '' ? undefined : a},
  rigthForeSectionLitle:{type: Boolean,set: a => a === '' ? undefined : a},
  rigthForeSectionBig:{type: Boolean,set: a => a === '' ? undefined : a},
  
},{ timestamps: true },)

if(this.title){
  RegulationSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}


const Regulation = mongoose.model("Regulation", RegulationSchema);

module.exports = Regulation;