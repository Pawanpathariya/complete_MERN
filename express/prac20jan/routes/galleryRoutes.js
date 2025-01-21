const express=require('express');
const Route=express.Router();

Route.get('/stugallery',(req,res)=>{
    res.send("student gallery page");
})
Route.get('/companyimages',(req,res)=>{
    res.send("company images page");
})
Route.get('/managerportfolio',(req,res)=>{
    res.send("manager portfolio page");
})
Route.get('/productimages',(req,res)=>{
    res.send("product images page");
})


module.exports = Route;