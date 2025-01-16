const http=require('http');
const college=require('./cybrom')
http.createServer((req,res)=>{
res.write("<h1>This is my first node Program </h1>")

res.write(college.Myclg())
res.write(college.university())
res.write(college.MyCourse())

res.end("<p>Server End Here </p>");

}).listen(4000,()=>{
    console.log("Server is running on port 4000")
}) 