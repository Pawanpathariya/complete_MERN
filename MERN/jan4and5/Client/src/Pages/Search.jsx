import { useState } from "react"
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { message } from "antd";
const Search=()=>{
const [searchdata,setsearchdata]=useState([])
const [name,setname]=useState("")
const getsearchdata=()=>{   
let api="http://localhost:8000/student/dataSearch"
axios.post(api,{name:name}).then((res)=>{

    if(res.data.length===0){
        message.error("No Data Found")
    }
    else{
    setsearchdata(res.data)}
})
}


const ans=searchdata.map((item)=>{
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.course}</td>
            <td>{item.fees}</td>
        </tr>
    )
})

    return(
        <>

        <h1 style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>Search</h1>
<div style={{width:"70%",marginLeft:"20%"}} className="table-responsive"  >
Enter Name <input type="text" name='name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
<button onClick={getsearchdata}>Search</button>
        <Table striped bordered hover style={{fontSize:"20px",marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Course</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
 {ans}
      </tbody>
    </Table>
    </div>
        </>
    )
}
export default Search