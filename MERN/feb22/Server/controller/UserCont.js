const bookModel=require('../model/bookModel')
const authorModel=require('../model/authorModel')
const insertData=async(req,res)=>{
const {name,email,city}=req.body

const author=await authorModel.create({
    name:name,
    email:email,
    city:city
})

res.status(200).send("Author save")
}

const showauthordata=async(req,res)=>{  
const author=await authorModel.find()
res.status(200).json(author)
}

const addnewbook=async(req,res)=>{
    const {id,bookname,bookprice}=req.body
    const book=await bookModel.create({bookname:bookname,
        bookprice:bookprice,
        authorid:id})
    await authorModel.findByIdAndUpdate(id,{$push:{bookid:book._id}})
   
    res.status(200).send("Book saved")
}

const displaydata=async(req,res)=>{
    const author=await authorModel.find().populate('bookid')
    res.status(200).send(author)
}

module.exports={insertData,showauthordata,addnewbook,displaydata}