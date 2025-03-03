const stuModel=require('../model/stuModel');
const usersave=async(req,res)=>{
    const{name,rollno,city,imgurl}=req.body;
    await stuModel.create({
        name:name,
        rollno:rollno,
        city:city,
        imgurl:imgurl
    })
res.send("Data Saved");
}

const userdisplay=async(req,res)=>{
    const data=await stuModel.find({});
    res.send(data);
}

module.exports={usersave,
    userdisplay
};  