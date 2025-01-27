// const express=require('express')
// const app=express() 


// app.get('/',(req,res)=>{
//     res.send('<h1> Hello world </h1>')
// })
// app.get('/home',(req,res)=>{
//     res.send("<h1>Home page </h1>")
// })
// app.post('/savedata',(req,res)=>{
//     res.send("this is save data post request ")
// })
// app.get('/about',(req,res)=>{
//     res.send("<h1>About page </h1>")
// })

// app.get('/contact',(req,res)=>{
//     res.send("<h1>Contact page </h1>")
// })

// app.post('/help',(req,res)=>{
//     res.send("<h1>Help page </h1>")
// })

// app.post('/feedback',(req,res)=>{
//     res.send("<h1>Feedback page </h1>")
// })
// app.listen(8000,()=>{
//     console.log('server is running on port 8000')
// }) 


//routes
const express=require('express')
 const app=express() 
const port=8000;


app.get('/student/home',(req,res)=>{
    res.send("<h1>Student Home page </h1>")
})
app.get('/student/about',(req,res)=>{
    res.send("<h1>Student About page </h1>")
})
app.get('/student/contact',(req,res)=>{
    res.send("<h1>Student Contact page </h1>")
})


app.get('/teacher/home',(req,res)=>{
    res.send("<h1>Teacher Home page </h1>")
})
app.get('/teacher/about',(req,res)=>{
    res.send("<h1>Teacher About page </h1>")
})
app.get('/teacher/contact',(req,res)=>{
    res.send("<h1>Teacher Contact page </h1>")
})

 app.listen(port,()=>{
     console.log(`server is running on port ${port}`)
 })