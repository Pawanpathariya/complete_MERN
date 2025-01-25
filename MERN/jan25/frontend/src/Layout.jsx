
import {Outlet} from 'react-router-dom'
import Topbar from './component/topbar'
import Footer from './component/footer'

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