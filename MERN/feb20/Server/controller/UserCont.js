const UserModel=require('../model/UserModel')
const ProfileModel=require('../model/ProfileModel')
const insertData=async(req,res)=>{
    try{
   const {username,email,first_name,last_name}=req.body;

     let user= await UserModel.create({
        username:username,
        email:email
     })

     let profile= await ProfileModel.create({
        firstname:first_name,
        lastname:last_name,
        userid:user._id
     })

        res.send("ok");
    }
    catch(err){
        console.log(err);
    }
}


const loadData=async(req,res)=>{
try{
let data=await ProfileModel.find().populate('userid');
res.send(data)
}
catch(err){
    console.log(err);   }
}

module.exports={insertData,loadData}