const express=require('express')
const Route=express.Router();

Route.get('/home',(req,res)=>{
    res.send("home page")
})
Route.get('/about',(req,res)=>{
    res.send("about page")
})
Route.get('/contact',(req,res)=>{
    res.send("contact page")
})
Route.get('/fees',(req,res)=>{
    res.send("fees page")
})

module.exports=Route;

