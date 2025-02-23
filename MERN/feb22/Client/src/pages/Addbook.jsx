import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Addbook = () => {
   const navigate=useNavigate();
    const [mydata,setmydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:8080/author/showauthor"
    try {
        const response=await axios.get(api);
        setmydata(response.data)
    } catch (error) {
        console.log(error)
    }
        }


        useEffect(()=>{
            loadData()
        },[])
        


const ans=mydata.map((item)=>{
return(
    <>
    <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td><button onClick={()=>{navigate(`/addnewbook/${item._id}`)}}>add Book</button></td>
    </tr>
    </>
)
})
    return(
        <>
        <h1>Addbook page</h1>


        <table border={1} width={500}>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>city</th>
                <th></th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Addbook