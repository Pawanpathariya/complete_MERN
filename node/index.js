const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1> Hello World </h1>");
}).listen(3000)