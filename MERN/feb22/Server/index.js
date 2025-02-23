const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const UserRoute=require('./Routes/UserRoutes');
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb://127.0.0.1:27017/onetomanyrelationship").then((res)=>console.log("DB connected"));

app.use('/author',UserRoute)



app.listen(port,()=>console.log(`Server is running on port ${port}`));
