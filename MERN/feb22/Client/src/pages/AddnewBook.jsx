import { useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
const AddnewBook = () => {
    const [bookname,setbookname]=useState("");
    const [bookprice,setbookprice]=useState("");
    const {id}=useParams();


    const handleSubmit=async()=>{

        let api="http://localhost:8080/author/addnewbook"
    try {
        const response=await axios.post(api,{id:id,bookname:bookname,bookprice:bookprice});
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }

    }
    return (
        <>
            <h1>Add new Book page </h1>

            Enter Book name <input type="text" value={bookname} onChange={(e)=>{setbookname(e.target.value)}} /> <br />
            Enter Book Price <input type="text" value={bookprice} onChange={(e)=>{setbookprice(e.target.value)}} /> <br />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}

export default AddnewBook