const mongoose=require('mongoose');
const stuSchema=new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    password:String
});

module.exports=mongoose.model('user',stuSchema);