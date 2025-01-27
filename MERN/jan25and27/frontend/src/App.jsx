import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/home"
import About from "./pages/about"
import Insert from "./pages/insert"
import Display from "./pages/display"
import Search from "./pages/search"
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}></Route>
<Route path="/about" element={<About/>}/>
<Route path="/home" element={<Home/>}/>
<Route path='/update' element={<About/>}/>
<Route path="/insert" element={<Insert/>}></Route>
<Route path="/display" element={<Display/>}></Route>
<Route path="/search" element={<Search/>}></Route>
</Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App