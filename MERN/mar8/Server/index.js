const express=require('express');

const session = require('express-session');


const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;


//const cookieParser = require('cookie-parser');



app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

/* //cookies
app.use(cookieParser());



app.get('/cookieset', (req, res) => {
    res.cookie('name', 'value',{maxAge:60000});
    res.cookie('college', 'cybrom');
    res.cookie('branch', 'CSE',{expire:6000});
    res.send('Cookie set successfully');    
  });

app.get('/cookieget', (req, res) => {  
    res.send(req.cookies);
 })

 app.get('/cookieclear', (req, res) => {
    res.clearCookie('name');
    res.send('Cookie cleared successfully');    
  });

*/

app.use(session({
    secret: 'pawan@123',
    resave: true,
    saveUninitialized: true,
  }));


  app.get('/session',(req,res)=>{  
     const {name,college,branch}=req.session;
    res.send({name,college,branch});
  })

  app.get('/sessionset',(req,res)=>{
    req.session.name='cybrom';
    req.session.college='NRI';
    req.session.branch='CSE';
    res.send("Session is set");
  })
  

  app.get('/sessionclear',(req,res)=>{
    req.session.destroy();
    res.send("Session is destroyed");
  })


app.listen(port,()=>console.log(`Server is running on port ${port}`));
