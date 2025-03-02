const stuModel=require('../model/stuModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
require('dotenv').config();
const registration=async(req,res)=>{
    {
        const {name,city, email, password} =req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
         const User = await stuModel.create({
           name:name,
           email:email,
           password: hashPassword,
           city:city
         })
           res.send("OKK");
       }
    }
const loginUser=async(req,res)=>{
    const {email, password} = req.body;
    const User= await stuModel.findOne({email:email});
     
    if (!User)
    {
        res.send("Invalid Email!!!");
    }
    const passwordMatch =  await bcrypt.compare(password, User.password);
   
    if (!passwordMatch)
    {
        res.send("Invalid Password!")
    }

    const token = await jwt.sign({id:User._id}, process.env.SECRETE_KEY, { expiresIn: '7 days' })
   res.send({token:token});
}

const userAuthenticate=async(req, res)=>{
    const token = req.header("x-auth-token");
    console.log(token);

    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const User= await UserModel.findById(verify.id).select("-password");
    
    res.send(User);

}

module.exports={registration,
    loginUser,
    userAuthenticate
}