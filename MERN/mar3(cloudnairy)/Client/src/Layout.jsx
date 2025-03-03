import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
    <Link to="/insert">Insert | </Link>
    <Link to="/display"> Display</Link>
        <Outlet/>
   
        </>
    )
}

export default Layout