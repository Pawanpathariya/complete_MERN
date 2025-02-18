const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//middkeware function it can also modified req,res
app.use((req,res,next)=>{
    console.log('first  Middleware function');
    req.name="Pawan";
    next();
})



app.get('/home',(req,res,next)=>{
console.log('Home page middle ware');
next();
},(req,res,next)=>{
console.log('Home page');
res.send('Home page');
console.log(req.name);
next();
 })


app.get('/about',(req,res,next)=>{
    console.log('About page middle ware');
    next();
   },(req,res)=>{
   console.log('About page');
   res.send('About page');
   //no next so that the next middlewear is not response
    })


    app.get('/service',(req,res,next)=>{
        console.log('Service page middle ware');
        next();
       },(req,res,next)=>{
       console.log('Service page');
       res.send('Service page');
       next();
        })  


 app.use((req,res)=>{
    console.log('End Middleware function'); 
 })

app.listen(port,()=>console.log(`Server is running on port ${port}`));
