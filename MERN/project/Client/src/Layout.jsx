import Footer from './Component/Footer.jsx';
import Topbar from './Component/TopBar.jsx';
import { Outlet } from 'react-router-dom';
const Layout=()=>{
    return(
        <>
        <Topbar/>
  <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;