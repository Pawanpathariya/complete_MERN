const mongoose = require('mongoose');
const contactSchema=new mongoose.Schema({
name:String,
email:String,
city:String,
mobile:Number
})

module.exports=mongoose.model("contact",contactSchema); 