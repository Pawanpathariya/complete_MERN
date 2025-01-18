const http=require('http');
const uc=require('uppercase')
http.createServer((req,res)=>{
    res.write(uc("<h1> Hello Guys </h1>"))
    res.end();
}).listen(3000);