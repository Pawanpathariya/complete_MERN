import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import axios from "axios"
const Display=()=>{


const [data, setdata]=useState([])

const getdata=()=>{
    let api="http://localhost:8000/student/getdata"
     axios.get(api).then((res)=>{
        setdata(res.data)
    })
}

useEffect(()=>{
    getdata()
},[])

const ans=data.map((item)=>{
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
        <h1 style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>Display</h1>
<div style={{width:"70%",marginLeft:"20%"}} className="table-responsive"  >
        <Table striped bordered hover style={{fontSize:"20px"}}>
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

export default Display