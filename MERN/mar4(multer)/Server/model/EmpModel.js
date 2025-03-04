const mongoose=require('mongoose');
const EmpSchema=new mongoose.Schema({
   name:String,
   empno:Number,
   city:String,
   designation:String,
   image:String

});

module.exports=mongoose.model('Employee',EmpSchema);