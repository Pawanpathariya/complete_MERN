import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Placement from './pages/Placement';
import Login from './pages/Login';
import Layout from './Layout';
import Protected from './Protected';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={ <Protected Component={Service}/> } />
        <Route path="/placement" element={ <Protected Component={Placement}/>} />
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
