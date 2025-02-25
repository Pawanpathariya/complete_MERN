const mongoose=require('mongoose')
const doctorSchema=new mongoose.Schema({
    doctorName: String,
    address: String,
    city: String,
    mobile: String,
    specialization: String,
    email: String,
    password: String
})
module.exports=mongoose.model('doctors',doctorSchema)