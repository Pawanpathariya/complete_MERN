const express=require('express')
const Route=express.Router();

Route.get('/home',(req,res)=>{
    res.send("home page")
})
Route.get('/about',(req,res)=>{
    res.send("about page")
})
Route.get('/dept',(req,res)=>{
    res.send("Department page")
})
Route.get('/salary',(req,res)=>{
    res.send("Employee salary page")
})

module.exports=Route;

