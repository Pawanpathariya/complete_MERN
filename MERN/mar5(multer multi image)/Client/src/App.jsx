import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Insert from "./pages/Insert"
import Display from "./pages/Display"
import ViewPro from "./pages/ViewPro"
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Insert/>}/>
        <Route path="/insert" element={<Insert/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="/viewpro/:id" element={<ViewPro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App