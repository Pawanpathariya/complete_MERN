const DoctorModel=require('../model/DoctorModel') 
const Registeration=(req,res)=>{
    try {
        const {doctorName, address, city, mobile, specialization, email, password}=req.body
        DoctorModel.create({
            doctorName,
            address,
            city,
            mobile,
            specialization,
            email,
            password
        })
        res.status(200).send({msg:"DATA SAVED"})
    } catch (error) {
        res.status(400).send({msg:"DATA NOT SAVED Server Error"})
    }

}


const showDoctorData=async(req,res)=>{
    try {
        const data=await DoctorModel.find({})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:"DATA NOT SAVED Server Error"})
    }
}

module.exports={
    Registeration,
    showDoctorData
}