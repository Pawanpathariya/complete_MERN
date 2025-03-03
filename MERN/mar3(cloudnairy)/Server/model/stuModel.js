const mongoose=require('mongoose');
const stuSchema=new mongoose.Schema({
    name:String,
    rollno:String,
    city:String,
    imgurl:String
});

module.exports=mongoose.model('user',stuSchema);