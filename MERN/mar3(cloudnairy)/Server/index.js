const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const stuRoute=require('./Routes/stuRoute');
require('dotenv').config();
const port=process.env.PORT;

mongoose.connect(process.env.MONGOCONNECT).then(()=>{
    console.log("Database Connected");
})
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use('/student',stuRoute);

app.listen(port,()=>console.log(`Server is running on port ${port}`));