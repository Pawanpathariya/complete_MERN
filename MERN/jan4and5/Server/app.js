const express=require('express');
const app=express();
const mongoose=require('mongoose');
const stuRoutes=require('./Routes/stuRoutes');
const cors=require('cors');
const bodyparser=require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/stuDB').then(()=>{
    console.log("connected to database");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/student',stuRoutes);

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})

