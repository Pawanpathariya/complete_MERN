const express=require('express');
const router=express.Router();
const EmpController=require('../controller/EmpCont');
const multer=require('multer');

const storage=  multer.diskStorage({
    destination: (req, file, cb)=>{
     cb(null, 'uploads/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})

const upload = multer({ storage: storage });




router.post('/insert',upload.single('image'),EmpController.EmpInsert);
router.get('/display',EmpController.EmpDisplay);
module.exports=router;