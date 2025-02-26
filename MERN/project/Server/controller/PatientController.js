const PatientModel=require('../model/PatientModel')
const bookAppointment=async(req,res)=>{
const {
    doctorId,patientAge,patientName,patientGender,patientAddress,patientMobile,patientDisease,patientEmail}=(req.body)
  try {
   let data=await PatientModel.create({
        doctorId,patientAge,patientName,patientGender,patientAddress,patientMobile,patientDisease,patientEmail
    })
    res.status(200).send("Appointment Booked")
  } catch (error) {
    res.status(400).send("Server Error")
  }

}

const showPatient=async(req,res)=>{
    const {docid}=req.body
    try {
        let data=await PatientModel.find({doctorId:docid})
        console.log(data)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Server Error")
    }
}

module.exports={
    bookAppointment,
    showPatient
}