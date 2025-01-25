import { useState } from "react"
import axios from "axios"
const Insert=()=>{

    const[input,setinput]=useState({});

const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setinput({...input,[name]:value})
}

const handleSubmit=async()=>{
  
}


    return(
        <>
            <h1>Insert</h1>

            Enter Rollno <input type="text" name="rollno" onChange={handleInput} /> <br />
            Enter name <input type="text" name="name" onChange={handleInput} /> <br />
            Enter city <input type="text" name="city" onChange={handleInput} /> <br />
            Enter fees <input type="text" name="fees" onChange={handleInput} /> <br />

            <button onClick={handleSubmit}>Insert</button>
        </>
    )
}

export default Insert