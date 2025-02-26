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

const loginDoctor=async(req,res)=>{
    try {
        const {email,password}=req.body
        const data=await DoctorModel.findOne({email:email})
        if(!data){
            return res.status(400).send("Invalid Email") 
        }
        if(data.password!=password){
            return res.status(400).send("Invalid Password")
        }
        res.status(200).send(data) 
    } catch (error) {
        console.log(error)
        res.status(400).send("DATA NOT SAVED Server Error")
    }
}


const searchDoctor=async(req,res)=>{
    try {
        const {doctorName,specialization}=req.body
        const data=await DoctorModel.find({$or:[{doctorName:doctorName},{specialization:specialization}]})
        if(data.length==0){
            return res.status(400).send("No Data Found")
        }
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:"DATA NOT SAVED Server Error"})
    }
}
module.exports={
    Registeration,
    showDoctorData,
    loginDoctor,
    searchDoctor
}