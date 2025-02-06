const express=require('express');
const stuCont=require('../Controller/stuCont');
const router=express.Router();


router.post('/datasave',stuCont.dataSave);
router.get('/getdata',stuCont.getdata);
router.post('/datasearch',stuCont.dataSearch);
router.post('/deletedata',stuCont.deletedata);


module.exports=router;