const express=require('express')
const app=express();
const port=7000;
const stuRoute=require('./routes/stuRoutes')
app.set('view engine','ejs')
app.use('/students',stuRoute)
app.listen(port,()=>{
    console.log(`Server run at ${port} port `);
}) 