const express=require('express');
const router=express.Router();
const UserCont=require('../controller/UserCont')

router.post('/insert',UserCont.insertData)
router.get('/showauthor',UserCont.showauthordata)
router.get('/display',UserCont.displaydata)
router.post('/addnewbook',UserCont.addnewbook)
module.exports=router