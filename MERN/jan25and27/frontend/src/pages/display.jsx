import { useState,useEffect } from "react"
import axios from "axios";
const Display=()=>{

const [data,setdata]=useState([]);

const getdata=async()=>{
    let api=await"http://localhost:5000/students/getdata"
    axios.get(api).then((res)=>{
     setdata(res.data)
    })
}

useEffect(()=>{
    getdata();
},[])


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
         

            <center>
            <h1>Display</h1>
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

export default Display