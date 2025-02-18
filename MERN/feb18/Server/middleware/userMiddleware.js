const UploadData=(req,res,next)=>{
    console.log("File is ready to upload");
    req.name="Image21.jpg"
    next();
}

module.exports=UploadData