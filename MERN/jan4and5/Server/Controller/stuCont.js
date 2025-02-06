const stuModel=require('../Model/stuModel');
const dataSave=(req,res)=>{
    const {name,city,course,fees}=req.body;
stuModel.create({
    name:name,
    city:city,
    course:course,
    fees:fees
})
res.send("data save")
}

const getdata=async(req,res)=>{
  const stude= await stuModel.find()
  res.send(stude)
}
const dataSearch=async(req,res)=>{
const rollno=req.body;
const stude= await stuModel.find(rollno)
res.send(stude)

}

const deletedata=async(req,res)=>{
  const{id}=req.body
  await stuModel.findByIdAndDelete(id)
  res.json("Data is Deleted");
    }


module.exports={dataSave,getdata,dataSearch,deletedata}