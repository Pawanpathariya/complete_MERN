const http=require('http');
http.createServer((req,res)=>{
res.write("<h1>This is my first node Program </h1>")
res.end("<h3>Server End </h3>");
}).listen(4000,()=>{
    console.log("Server is running on port 4000")
})