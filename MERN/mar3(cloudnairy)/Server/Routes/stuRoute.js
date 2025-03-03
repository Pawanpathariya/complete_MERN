const express=require('express');
const router=express.Router();
const stuCont=require('../controller/stuCont');

router.post('/datasave',stuCont.usersave);
router.get('/display',stuCont.userdisplay);
module.exports=router;