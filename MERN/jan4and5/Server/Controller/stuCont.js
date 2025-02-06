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
const {name}=req.body;
const stude= await stuModel.find({name:name})
res.send(stude)

}

const deletedata=async(req,res)=>{
  const{id}=req.body
  await stuModel.findByIdAndDelete(id)
  res.json("Data is Deleted");
    }

    const editShow=async(req,res)=>{
        const{id}=req.body
        const stude= await stuModel.findById(id)
        res.send(stude)
      }
const dataSaveEdit=async(req,res)=>{
  const {_id}=req.body;
  await stuModel.findByIdAndUpdate(_id,req.body)
  res.send("Data Updated")
}
module.exports={dataSave,getdata,dataSearch,deletedata,editShow,dataSaveEdit}