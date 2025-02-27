import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{display: 'flex', justifyContent: 'space-around'}}>
        <ul style={{display: 'flex', listStyle: 'none', padding: 0, margin: 0,gap:"20px"}}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/placement">Placement</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
<hr />
      
      <Outlet />
    </>
  );
};

export default Layout;
