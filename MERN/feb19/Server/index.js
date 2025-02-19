const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



app.get('/home',async(req,res)=>{
try {
    console.log("home page")
    throw new Error("Database not connected")
    res.status(200).send("database connected")
} catch (error) {
    res.status(400).send({msg:"data error"})
}
 })





app.listen(port,()=>console.log(`Server is running on port ${port}`));
