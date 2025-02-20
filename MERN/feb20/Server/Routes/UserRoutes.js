const express=require('express');
const router=express.Router();
const UserCont=require('../controller/UserCont')

router.post('/insert',UserCont.insertData)
router.get('/display',UserCont.loadData)

module.exports=router