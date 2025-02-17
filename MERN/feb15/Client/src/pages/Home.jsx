import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { use } from "react";
const Home=()=>{

    useEffect(() => {
       if(!localStorage.getItem("name") && !localStorage.getItem("email")){
        navigate("/login");
       } 
    },[])
    const navigate=useNavigate();
    return(
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home