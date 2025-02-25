const express=require('express');
const router=express.Router();
const DoctorController=require('../controller/DoctorController')

router.post('/register',DoctorController.Registeration)
router.get('/showdoctor',DoctorController.showDoctorData)
module.exports=router