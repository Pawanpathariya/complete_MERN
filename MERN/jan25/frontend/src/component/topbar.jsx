import { Link } from "react-router-dom"
const Topbar=()=>{
return(
<nav style={{ padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '2px solid #ccc',fontSize:"20px",display:"flex",justifyContent:"space-evenly" }}>
    <Link to="/home" style={{  textDecoration: 'none', color: '#333' }}>Home</Link>
    <Link to="/insert" style={{  textDecoration: 'none', color: '#333' }}>Insert</Link>
    <Link to="/display" style={{ textDecoration: 'none', color: '#333' }}>Display</Link>
    <Link to="/update" style={{ textDecoration: 'none', color: '#333' }}>Update</Link>
    <Link to="/about" style={{  textDecoration: 'none', color: '#333' }}>About</Link>
</nav>
)
}
export default Topbar