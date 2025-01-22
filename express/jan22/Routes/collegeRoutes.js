const express=require('express');
const stuRoutes=require('../controllers/stuController')
const router=express.Router();
const collegeModel=require('../models/collegeModel')
router.get('/home',stuRoutes.home)
router.get('/about',stuRoutes.about)
router.get('/courses',stuRoutes.courses);
router.get('/faculty',stuRoutes.faculty);
router.get('/contact',stuRoutes.contact);

module.exports=router 