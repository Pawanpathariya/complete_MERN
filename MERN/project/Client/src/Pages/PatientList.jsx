import { useState,useEffect } from "react"
import BASE_URL from "../confiq"
import axios from "axios"
const PatientList = () => {
const [patientdata,setpatientdata]=useState([])

const loadData=async()=>{ 
 let api=`${BASE_URL}/patients/showPatientList`
 try {
    let response= await axios.post(api,{docid:localStorage.getItem("id")})
    setpatientdata(response.data)
 } catch (error) {
    toast.error(error.response.data.msg)
 }
}

useEffect(()=>{
    loadData();
},[])

const ans=patientdata.map((key)=>{
    return(
<>
<tr>
    <td>{key.patientName}</td>
    <td>{key. patientMobile}</td>
    <td>{key. patientEmail}</td>
    <td>{key.patientAddress}</td>
    <td>{key.patientGender}</td>
    <td>{key.patientAge}</td>
    <td>{key.patientDisease}</td>
</tr>

</>
    )
})
    return (
<>
<h1>Patient List</h1>
<table style={{width:"100%",padding:"20px",fontSize:"20px",marginTop:"20px",margin:'auto',border:'1px solid black'}} id="tablepat">
    <tr>
        <th>Patient Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Address</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Disease</th>
     
    </tr>
    {ans}
</table>

</>

    )
}

export default PatientList