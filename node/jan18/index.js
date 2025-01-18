const http=require('http');
const uc=require('uppercase')
http.createServer((req,res)=>{
    res.write(uc("<h1> Hello Guys </h1>"))
    res.end(uc("<p>Server end....... </p>"));
}).listen(3000,()=>{
    console.log("Sever run at 3000 port")
});