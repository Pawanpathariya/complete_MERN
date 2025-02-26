const express=require('express');
const router=express.Router();
const PatientController=require('../controller/PatientController')

router.post("/bookAppointment",PatientController.bookAppointment)
router.post("/showPatientList",PatientController.showPatient)
module.exports=router