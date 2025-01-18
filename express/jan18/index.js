const express=require('express')
const app=express() 
app.get('/',(req,res)=>{
    res.send('<h1> hello world </h1>')
})
app.listen(8000,()=>{
    console.log('server is running on port 8000')
})