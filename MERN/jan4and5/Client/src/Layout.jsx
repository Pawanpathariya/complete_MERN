import Footer from "./component/Footer"
import Topbar from "./component/Topbar"
import { Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Topbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout