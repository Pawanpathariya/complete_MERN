const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const mongoose = require('mongoose');
const DoctorRoutes=require('./Routes/DoctorRoutes')
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect(process.env.MONGOCONNECT).then(()=>{
    console.log("Connected to DB");
})

app.use('/doctors',DoctorRoutes)

app.listen(port,()=>console.log(`Server is running on port ${port}`));
