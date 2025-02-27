import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [name,setname]=useState("");
const navigate=useNavigate();
const handleLogin=()=>{
    console.log(name)
localStorage.setItem("name",name);
navigate("/home")

}

useEffect(()=>{
if(localStorage.getItem("name")){
navigate("/home")
}
},[])
    return(
        <>
        <h1>Login</h1>
        Enter Name : <input type="text" name='name' onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
        Password : <input type="text" name ="pass" /> <br />
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login;