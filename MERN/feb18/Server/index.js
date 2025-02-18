const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const userMiddle=require('./middleware/userMiddleware')
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/home',userMiddle,(req,res)=>{
    console.log('File is uploaded');
    console.log(req.name);
    res.send('File is uploaded');
})

app.listen(port,()=>console.log(`Server is running on port ${port}`));
