import { useState } from "react";
import axios from "axios";  
import { useNavigate } from "react-router-dom";
const Login=()=>{
const navigate=useNavigate();
    const [login,setLogin]=useState({});

    const handleLogin=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }

const SubmitLogin=async()=>{
    let api=`http://localhost:8080/student/loginuser`;
    try {
        let res=await axios.post(api,login);
        if(res.data.length==0){
            alert("Login Failed");
        }
        else{
        alert("Login Successfull");
        navigate("/home");
        }
    } catch (error) {
        console.log(error);
    }
}

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', backgroundColor: '#1e1e1e', color: '#39ff14', fontFamily: 'monospace' ,width:'400px',margin:'auto',marginTop:'100px',borderRadius:'10px',boxShadow:'10px 0px 10px rgb(5, 23, 2)'}}>
            <h1 style={{ margin: '20px 0', borderBottom: '2px solid #39ff14' }}>Login</h1>
            <label>
                Enter Email :- 
                <input type="email" name="email" value={login.email} onChange={handleLogin} style={{ backgroundColor: '#333', color: '#39ff14', border: '1px solid #39ff14', padding: '5px', margin: '10px 0' }} />
            </label>
            <label>
                Enter Password :- 
                <input type="password" name="password" value={login.password} onChange={handleLogin} style={{ backgroundColor: '#333', color: '#39ff14', border: '1px solid #39ff14', padding: '5px', margin: '10px 0' }} />
            </label>
            <button onClick={SubmitLogin} style={{ backgroundColor: '#333', color: '#39ff14', border: '1px solid #39ff14', padding: '10px 20px', margin: '10px 0' }}>Login</button>
            <button onClick={() => navigate("/register")} style={{ backgroundColor: '#333', color: '#39ff14', border: '1px solid #39ff14', padding: '10px 20px', margin: '10px 0' }}>Register</button>
        </div>
    )
}

export default Login;