import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
const About=()=>{
  
    const navigate=useNavigate();
        useEffect(() => {
           if(!localStorage.getItem("name") && !localStorage.getItem("email")){
            navigate("/login");
           } 
        },[])
    return(
      <>
      <h1>About</h1>
      </>
    )
  }
  
  export default About
