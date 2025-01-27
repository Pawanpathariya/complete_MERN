//search using post request

import { useState,useEffect } from "react";
import axios from "axios";
const Search=()=>{

    
const [data,setdata]=useState([]);
const [rollno,setrollno]=useState("");
const getdata=async()=>{
    let api=await`http://localhost:5000/students/getdata`
    axios.post(api,{roll:rollno}).then((res)=>{ 

        if(res.data.length==0){
            alert("No Data Found");
        }

        else{
   setdata(res.data)}
    })
}

const ans=data.map((key)=>{
    return(
        <>

            <tbody>
                <tr style={{padding:"10px"}}>
                    <td style={{padding:"10px"}}>{key.rollno}</td>
                    <td style={{padding:"10px"}}>{key.name}</td>
                    <td style={{padding:"10px"}}>{key.city}</td>
                    <td style={{padding:"10px"}}>{key.fees}</td>
                </tr>
            </tbody>
        </>
    )
})

    return(
        <>
            <h1 style={{textAlign:"center"}}>Search By roll no</h1>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px"}}>
                <input type="text" name="rollno" value={rollno} onChange={(e)=>{setrollno(e.target.value)}} style={{width:"300px",height:"20px",fontSize:"20px",padding:"5px"}}/>
                <button onClick={getdata} style={{width:"100px",height:"30px",backgroundColor:"#4CAF50",color:"white",borderRadius:"5px",cursor:"pointer",marginLeft:"10px"}}>Search</button>
            </div>

            
            <center>
            <table border={2} style={{margin:"20px",fontSize:"20px"}}>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
            </thead>
            {ans}
            </table>

            </center>
        </>
    )
}

export default Search