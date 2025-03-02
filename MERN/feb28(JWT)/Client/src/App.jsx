import Login from "./pages/Login"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registration from "./pages/Registration"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

        <Route path='/' element={<Layout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App