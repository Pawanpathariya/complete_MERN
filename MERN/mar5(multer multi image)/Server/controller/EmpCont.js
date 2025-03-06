const EmpModel=require('../model/EmpModel');
const EmpInsert=async(req,res)=>{

    try {
        const {name,empno,city,designation}=req.body;
        const imageUrls = req.files.map(file => file.path);
        const defaultimage=imageUrls[0];
        const user=await EmpModel.create({name,empno,city,designation,defaultimage,images:imageUrls});
        res.status(200).send("data is inserted");
    } catch (error) {
        res.status(400).send("data is not inserted");
    }
   
}

const EmpDisplay=async(req,res)=>{
    const data=await EmpModel.find()
    res.send(data);
}

const EmpUpdate=async(req,res)=>{
const {defaultimage,images,id,restimages}=req.body;
let user=await EmpModel.findByIdAndUpdate(id,{defaultimage:images,images:restimages});
res.send("Updated");
}


const EmpView=async(req,res)=>{
    const {id}=req.body;
    const data=await EmpModel.findById(id);
    res.send(data);
}
module.exports={EmpInsert,EmpDisplay,EmpUpdate,EmpView};