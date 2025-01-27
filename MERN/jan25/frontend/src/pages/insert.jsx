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
  let api=await"http://localhost:5000/students/datasave";
    axios.post(api,input).then((res)=>{
   alert("Data Inserted Successfully");
   console.log(res.data)
})
}
    return(
        <>
            <div style={{border:"2px solid #ccc",padding:"10px",width:"400px",margin:"auto",marginTop:"20px",borderRadius:"10px"}}>
            <h1 style={{textAlign:"center"}}>Insert</h1>

            <table style={{width:"100%"}}>
                <tbody>
                    <tr style={{padding:"20px"}}>
                        <td>Enter Rollno</td>
                        <td><input type="text" name="rollno" onChange={handleInput} style={{width:"100%"}} /></td>
                    </tr>
                    <tr style={{padding:"20px"}}>
                        <td>Enter name</td>
                        <td><input type="text" name="name" onChange={handleInput} style={{width:"100%"}} /></td>
                    </tr>
                    <tr style={{padding:"20px"}}>
                        <td>Enter city</td>
                        <td><input type="text" name="city" onChange={handleInput} style={{width:"100%"}} /></td>
                    </tr>
                    <tr style={{padding:"20px"}}>
                        <td>Enter fees</td>
                        <td><input type="text" name="fees" onChange={handleInput} style={{width:"100%"}} /></td>
                    </tr>
                </tbody>
            </table>

            <center style={{marginTop:"20px"}}>
                <button onClick={handleSubmit} style={{width:"100px",height:"30px",backgroundColor:"#4CAF50",color:"white",borderRadius:"5px",cursor:"pointer"}}>Insert</button>
            </center>
            </div>
        </>
    )
}

export default Insert