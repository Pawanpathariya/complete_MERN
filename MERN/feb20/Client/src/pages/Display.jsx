import { useState,useEffect } from "react"
import axios from "axios"   

const Display=()=>
    {

        const [data,setData]=useState([]);

        const loadData=async()=>{
        let api="http://localhost:8080/student/display"
        try{
            let res=await axios.get(api);
            setData(res.data)
           console.log(res.data)
           console.log(data)
        }
        catch(err){
            console.log(err)
        }
        }



        useEffect(()=>{
           loadData() 
        },[])
        const ans=data.map((item)=>{
            return(
                <>
                <tr>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.userid.username}</td>
                    <td>{item.userid.email}</td>
                    </tr>
                </>
            )
        })
        return(
            <>
                <h1>Display</h1>


                <table border={2}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>

                    {ans}
                </table>
            </>
        )
    }
    
    
    export default Display