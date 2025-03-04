import { useState,useEffect } from "react"
import axios from "axios"
const Display = () => {
  const [data,setData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [recordsPerPage]=useState(1);

  const indexOfLastRecord=currentPage*recordsPerPage;
  const indexOfFirstRecord=indexOfLastRecord-recordsPerPage;
  const currentRecords=data.slice(indexOfFirstRecord,indexOfLastRecord);

  const nPages=Math.ceil(data.length/recordsPerPage);

  const loadData=async()=>{
    let api="http://localhost:8080/employee/display";
    const response=await axios.get(api);
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans=currentRecords.map((item)=>{
    return(
      <tr>
        <td>{item.name}</td>
        <td>{item.empno}</td>
        <td>{item.city}</td>
        <td><img src={`http://localhost:8080/uploads/${item.image}`} width="300px" height="400px"/></td>
      </tr>
    )
  })

  return(
    <>
    <h1 style={{textAlign:"center"}}>Display Page</h1>

    <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
      <thead style={{ backgroundColor: "#333", color: "#fff" }}>
        <tr>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Rollno</th>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>City</th>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Image</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </table>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer",marginRight:"10px" }} onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Previous</button>
      <button style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===nPages}>Next</button>
    </div>
    </>
  )

}

export default Display
