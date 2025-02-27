import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Protected=({Component})=>{
const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("name")){
            navigate("/home")
        }
    })
    return(
        <>
  <Component/>  
        </>
    )
}

export default Protected