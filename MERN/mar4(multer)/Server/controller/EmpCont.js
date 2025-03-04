const EmpModel=require('../model/EmpModel');
const EmpInsert=async(req,res)=>{

    try {
        const {name,empno,city,designation}=req.body;
        await EmpModel.create({name,empno,city,designation,image:req.file.filename});
        res.status(200).send("data is inserted");
    } catch (error) {
        res.status(400).send("data is not inserted");
    }
   
}

const EmpDisplay=async(req,res)=>{
    const data=await EmpModel.find()
    res.send(data);
}
module.exports={EmpInsert,EmpDisplay};