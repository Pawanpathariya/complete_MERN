import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
const Home=()=>{
    const navigate=useNavigate();
    const userAuthenticate=async()=>{
      const token = localStorage.getItem("token");
      if (token)
      {
        let api="http://localhost:8080/student/userauthenticate";
        const response = await axios.post(api, null, { headers: { "x-auth-token": token } });
        console.log(response.data);
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
         navigate("/dashboard");       
      }
    }
  
  useEffect(()=>{
    userAuthenticate();
  }, [])
  
    return(
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home