const express=require('express');
const router=express.Router();
const stuCont=require('../controller/stuCont');

router.post('/registeration',stuCont.registration)
router.post('/loginuser',stuCont.loginUser)
module.exports=router;