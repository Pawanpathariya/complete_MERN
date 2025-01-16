const http=require('http');
const emp=require('./employee')
http.createServer((req,res)=>{
res.write(emp.empDetail())
res.write(emp.empSalary())
res.write(emp.workExperience())

res.end()
}).listen(5000,()=>{
    console.log("Server is running on port 5000!")
}) 