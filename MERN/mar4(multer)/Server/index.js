const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const EmpRoutes=require('./Routes/EmpRoute');

mongoose.connect(process.env.MONGOCONNECT).then(()=>{
    console.log("Database Connected");
})
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/uploads', express.static('uploads'))

app.use('/employee',EmpRoutes);

app.listen(port,()=>console.log(`Server is running on port ${port}`));