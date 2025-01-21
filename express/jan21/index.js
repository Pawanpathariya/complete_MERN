const express=require('express')
const app=express();
const port=7000;
app.set('view engine','ejs')
const stuRoute=require('./routes/stuRoutes')
app.use('/students',stuRoute)
app.listen(port,()=>{
    console.log(`Server run at ${port} port `);
})