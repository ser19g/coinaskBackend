const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')
var mongoose_delete = require('mongoose-delete');

// model MainCategory
const TopNewsSchema = new mongoose.Schema({
  status: {type:String},
  category: {type:String},
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
  latest: {type: Boolean,set: a => a === '' ? undefined : a},
  icon:[{type:String}],
  bigImageArticle:{type: Boolean,set: a => a === '' ? undefined : a},
  rigthForeSectionLitle:{type: Boolean,set: a => a === '' ? undefined : a},
  rigthForeSectionBig:{type: Boolean,set: a => a === '' ? undefined : a},
  
},{ timestamps: true },)

if(this.title){
  TopNewsSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}

TopNewsSchema.plugin(mongoose_delete)

const TopNews = mongoose.model("TopNews", TopNewsSchema);

module.exports = TopNews;