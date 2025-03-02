import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
    const navigate = useNavigate();
    const logout=()=>{
      localStorage.clear();
      navigate("/login");
    }
return(
    <>
  <nav style={{backgroundColor:"#333",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <Link to="/home" style={{color:"#fff",textDecoration:"none",fontSize:"20px"}}>Home</Link>
    <Link to="/about" style={{color:"#fff",textDecoration:"none",fontSize:"20px"}}>About</Link>
    <button style={{color:"#fff",textDecoration:"none",fontSize:"20px",backgroundColor:"red",border:"none",padding:"10px",cursor:"pointer"}} onClick={logout}>Logout</button>
  </nav>
    </>
)
}

export default Topbar