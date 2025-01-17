//readFile(path,function)
/*
const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
fs.readFile("pawan.txt",(err,data)=>{
    if(err) throw err;
        res.write(data);
        res.end();
})  
}).listen(8000,()=>{
    console.log('server is running at 8000 port');
})
*/

//createFile 1.append() 2.open()  3.writeFile()

//appendFile() in this if file is already created then append element in it
/*const fs=require('fs');
fs.appendFile("pawanpathariya.pdf"," This is pdf file ",(err)=>{
  if(err) throw err;
  console.log("file created")
})
*/

//open() it only create file 'w' for write 'r' for read
/*
const fs=require('fs');
fs.open('myfile.txt','w',(err,file)=>{
    if(err) throw err;
    console.log("file created")
}) */

//writeFile() it replace file
/*
const fs=require('fs');
fs.writeFile('myfile.txt','I am Pawan Pathariya ',(err)=>{
    if(err) throw err;
    console.log("file created")
})
    */
//unlink() delete
/*
const fs =require('fs');
fs.unlink('main.txt',(err)=>{
    if (err) throw err;
    console.log("file deleted");
})
  */
//rename()
const fs =require('fs');
fs.rename('pawan.txt','main.txt',(err)=>{
if(err) throw err;
console.log("file renamed");
})
