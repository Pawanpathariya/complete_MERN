const stuModel=require('../model/stuModel');
const registration=(req,res)=>{
   const {name,city,email,password}=req.body;
   stuModel.create({name,city,email,password}).then((data)=>{
       res.send(data);
   })
}
const loginUser=async(req,res)=>{
    const {email,password}=req.body;

try {
    let data=await stuModel.findOne({email:email})
    console.log(data);
    if(!data){
      res.status(400).send({msg:"User Not Found"});
    }
 
  if(data.password!=password){
     res.status(400).send({msg:"Wrong password"});
     }
 
     res.send(data);
} catch (error) {
    console.log(error);
}


}


module.exports={registration,
    loginUser
}