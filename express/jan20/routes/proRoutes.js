const express=require('express')
const Route=express.Router();

Route.get('/location',(req,res)=>{
    res.send("Location page")
})
Route.get('/sales',(req,res)=>{
    res.send("Sales page")
})
Route.get('/stock',(req,res)=>{
    res.send("Stock page")
})
Route.get('/price',(req,res)=>{
    res.send("Price page")
})

module.exports=Route;

