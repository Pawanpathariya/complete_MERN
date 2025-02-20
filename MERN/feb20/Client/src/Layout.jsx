import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <ul style={{display:"flex",gap:"20px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/insert">Insert</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
        </ul>
      </nav>

      
      <Outlet />
    </>
  );
};

export default Layout;
