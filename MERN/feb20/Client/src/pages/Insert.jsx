import { useState } from "react"
import axios from "axios"
const Insert=()=>{

    const [input,setInput]=useState({});

const HandleSubmit=()=>{
   let api="http://localhost:8080/student/insert"

   try{
    axios.post(api,input).then((res)=>{
        console.log(res.data)
    })
}
catch(err){
    console.log(err)
}
}


        return(
            <>
                <h1>Insert Page</h1>

                Enter UserName : <input type="text" value={input.username} onChange={(e)=>setInput({...input,username:e.target.value})} />
                <br />
                Enter Email : <input type="text" value={input.email}  onChange={(e)=>setInput({...input,email:e.target.value})} />
                <br />
                Enter First name : <input type="text" value={input.firstname}  onChange={(e)=>setInput({...input,first_name:e.target.value})} /> <br />
          Enter Last Name : <input type="text" value={input.lastname}  onChange={(e)=>setInput({...input,last_name:e.target.value})} />
                <br />
                <button onClick={HandleSubmit}>Save</button>
            </>
        )
    }
    
    
    export default Insert