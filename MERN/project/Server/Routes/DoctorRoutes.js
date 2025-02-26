const express=require('express');
const router=express.Router();
const DoctorController=require('../controller/DoctorController')

router.post('/register',DoctorController.Registeration)
router.post('/login',DoctorController.loginDoctor)
router.post('/search',DoctorController.searchDoctor)
router.get('/showdoctor',DoctorController.showDoctorData)
module.exports=router