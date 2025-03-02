import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
const About=()=>{
  
    const navigate=useNavigate();

    useEffect(()=>{
      const token= localStorage.getItem("token");
        if(!token)
        {
          navigate("/login");        
        }
    })
    return(
      <>
      <h1>About</h1>
      </>
    )
  }
  
  export default About
