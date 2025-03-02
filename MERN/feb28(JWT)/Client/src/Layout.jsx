import {Outlet} from 'react-router-dom'
import Topbar from './component/Topbar'
import Footer from './component/Footer'
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