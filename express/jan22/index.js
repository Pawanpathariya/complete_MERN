const express=require('express');
const app=express();
const collegeRoutes=require('./Routes/collegeRoutes');
const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/college").then(()=>{
    console.log("database connected");    
})
app.set("view engine",'ejs');

app.use("/college",collegeRoutes);

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});