const mongoose=require('mongoose');
const EmpSchema=new mongoose.Schema({
   name:String,
   empno:Number,
   city:String,
   designation:String,
   defaultimage:String,
   images:[String]

});

module.exports=mongoose.model('Employee',EmpSchema);