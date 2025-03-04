import { useState,useEffect } from "react"
import axios from "axios"
const Display = () => {
  const [data,setData]=useState([]);
const loadData=async()=>{
  let api="http://localhost:8080/employee/display";
  const response=await axios.get(api);
  setData(response.data);
}

useEffect(()=>{
  loadData();
},[])

const ans=data.map((item)=>{
  return(
    <tr>
      <td>{item.name}</td>
      <td>{item.empno}</td>
      <td>{item.city}</td>
      <td><img src={`http://localhost:8080/uploads/${item.image}`} width="200px" height="200px"/></td>
    </tr>
  )
})
return(
  <>
  <h1>Display</h1>

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
  </>
)

}

export default Display