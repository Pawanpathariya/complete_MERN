const express=require('express');
const app=express();
const port=7000;
const hosRoute=require('./routes/hospitalsRoutes');
const galleryRoute=require('./routes/galleryRoutes');
app.use('/hospitals',hosRoute);
app.use('/gallery',galleryRoute);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})