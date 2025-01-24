const express=require("express");   
const router=express.Router();
const stucont=require("../Controllers/stuCont");
router.get("/home",stucont.stuhome);
router.get("/insert",stucont.stuinsert);
router.get("/display",stucont.studisplay);
router.post('/save',stucont.stusave);
module.exports=router;