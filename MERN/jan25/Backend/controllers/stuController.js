const stuModel=require('../models/stuModel')
const datasave=async(req,res)=>{
   const {rollno,name,city,fees}=req.body;
    const data= await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })

    res.send(data);
}

module.exports={datasave}