const mongoose=require('mongoose');

const stuSchema=new mongoose.Schema({
    name:String,
    city:String,
    course:String,
    fees:Number
})

module.exports=mongoose.model('studentrecord',stuSchema);