const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    patientName: String,
    patientAge: String,
    patientGender: String,
    patientAddress: String,
    patientMobile: String,
    patientDisease: String,
    patientEmail: String,
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors'
    }
    })
module.exports=mongoose.model('patients',patientSchema)