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
    if(res.data.length==0){
        message.error("No Data Found")
    }
    else{
    setsearchdata(res.data)
    message.success("Data Found")}
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
        <div style={{backgroundColor:"#4CAF50",color:"white",padding:"20px",borderRadius:"10px 10px 0 0"}}>

        <h1 style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>Search</h1>
<div style={{ width: "70%", margin: "0 auto", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "0 0 10px 10px" }} className="table-responsive">
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="name" style={{ marginRight: "10px", color: "black" }}>Enter Name</label>
        <input type="text" name='name' value={name} onChange={(e) => setname(e.target.value)} style={{ padding: "5px", borderRadius: "5px" }} />
        <button onClick={getsearchdata} style={{ marginLeft: "10px", backgroundColor: "#4CAF50", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Search
        </button>
    </div>
    <Table striped bordered hover style={{ fontSize: "20px", marginTop: "20px" }}>
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
        </div>
    )
}
export default Search