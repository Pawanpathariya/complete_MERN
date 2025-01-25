const express=require('express')
const app=express()
const bodyparser = require('body-parser');
const stuRoute=require('./Routes/stuRoutes')
const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/studentdata').then(()=>{
    console.log("Database connected");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/students',stuRoute);


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})