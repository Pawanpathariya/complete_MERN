const express=require('express')
const app=express()
const bodyparser = require('body-parser');




// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})