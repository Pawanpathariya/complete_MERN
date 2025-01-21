const express=require('express');
const Route=express.Router();

Route.get('/home',(req,res)=>{
    res.send("Hospitals home");
})
Route.get('/patient',(req,res)=>{
    res.send("Hospitals Patient Page");
})
Route.get('/admit',(req,res)=>{
    res.send("Hospitals Admit Page");
})
Route.get('/save',(req,res)=>{
    res.send("Hospitals Save Page");
})


module.exports = Route;