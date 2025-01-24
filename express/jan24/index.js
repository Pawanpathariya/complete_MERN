const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/studentdata").then(()=>{
    console.log("database connected");
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.set("view engine","ejs");
const stuRoutes=require("./Routes/stuRoutes");
app.use("/students",stuRoutes);

app.listen(9100,()=>{
    console.log("server started at 9100 port");
})