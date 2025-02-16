const stuModel=require('../model/stuModel');
const registration=(req,res)=>{
   const {name,city,email,password}=req.body;
   stuModel.create({name,city,email,password}).then((data)=>{
       res.send(data);
   })
}
const loginUser=(req,res)=>{
    const {email,password}=req.body;
    stuModel.find({email,password}).then((data)=>{
        res.send(data);
    })
}

module.exports={registration,
    loginUser
}