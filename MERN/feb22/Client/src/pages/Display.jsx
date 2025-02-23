import { useState,useEffect } from "react"
import axios from "axios"   

const Display=()=>
    {

        const [data,setData]=useState([]);

        const loadData=async()=>{
        let api="http://localhost:8080/author/display"
        try{
            let res=await axios.get(api);
            setData(res.data)
           console.log(res.data)
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
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>
                    {
                        item.bookid.map((book)=>{
                            return(
                                <>
                                    <p>Books :{book.bookname}   Price : {book.bookprice} </p>
                                </>
                            )
                        })
                    }
                  </td>
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
                        <th>City</th>
                        <th>Books </th>
                    </tr>

                    {ans}
                </table>
            </>
        )
    }
    
    
    export default Display