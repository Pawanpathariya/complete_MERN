const express=require('express');
const router=express.Router();
const stuController=require('../controllers/stuController')

router.post('/datasave',stuController.datasave);


module.exports=router