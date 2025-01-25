const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
rollno:Number,
name:String,
city:String,
fees:Number

})

module.exports=mongoose.model('student',studentSchema)