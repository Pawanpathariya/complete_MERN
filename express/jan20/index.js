// const express=require('express')
// const app=express();
// const stuRoute=require('./routes/stuRoutes')
// const teachRoute=require('./routes/teachRoutes')

// app.use('/student',stuRoute)
// app.use('/teacher',teachRoute)
// app.listen(7000,()=>{
//     console.log("server run at 7000 port ");  
// })

const express=require('express')
const app=express();
const empRoutes=require('./routes/empRoutes');
const proRoutes=require('./routes/proRoutes')


app.use('/employee',empRoutes);
app.use('/products',proRoutes)
app.listen(7000,()=>{
    console.log("server run at 7000 port!");  
})