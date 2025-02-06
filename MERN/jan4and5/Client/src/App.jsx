import Layout from "./Layout"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Update from "./Pages/Update"
import Home from "./Pages/Home"
import Search from "./Pages/Search"
import Edit from "./Pages/Edit"
const App=()=>{
return(
  <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} > 
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/search' element={<Search/>}/>
    <Route path="/insert" element={<Insert />} />
    <Route path="/display" element={<Display />} />
    <Route path="/update" element={<Update />} />
    <Route path="/edit/:id" element={<Edit/>}/>
      </Route>
  
  </Routes>
</BrowserRouter>

  </>
)
}

export default App