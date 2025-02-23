import { useState } from "react"
import axios from "axios"
const Insert=()=>{

    const [input,setInput]=useState({});

const HandleSubmit=()=>{
    console.log(input)
   let api="http://localhost:8080/author/insert"

   try{
    axios.post(api,input).then((res)=>{
        console.log(res.data)
        alert("author saved")
    })
}
catch(err){
    console.log(err)
}
}


        return(
            <>
                <h1>Insert Author Detail</h1>

                Enter Author Name : <input type="text" value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})} />
                <br />
                Enter Email : <input type="text" value={input.email}  onChange={(e)=>setInput({...input,email:e.target.value})} />
                <br />
                Enter City: <input type="text" value={input.city}  onChange={(e)=>setInput({...input,city:e.target.value})} /> <br />

                <button onClick={HandleSubmit}>Save</button>
            </>
        )
    }
    
    
    export default Insert