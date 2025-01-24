const stuModel=require("../models/stuModel");
const stuhome=(req,res)=>{
    res.render("home");
}
const stuinsert=(req,res)=>{
    res.render("insert");
}   
const studisplay=(req,res)=>{
    res.render("display");
}

const stusave=async(req,res)=>{
  const{rollno,name,city,fees}=req.body;
  const data=await stuModel.create({
      rollno:rollno,
      name:name,
      city:city,
      fees:fees
  })

  res.render('insert');
}
module.exports={
    stuhome,
    stuinsert,
    studisplay,
    stusave
}