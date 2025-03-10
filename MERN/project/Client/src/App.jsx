import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Search from './Pages/Search';
import DashBoard from './Pages/DashBoard';
import Appointment from './Pages/Appointment';
import PatientList from './Pages/PatientList';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} > 
        
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/appointment/:id' element={<Appointment/>}/>
        </Route>
      </Routes>

      <Routes>
        <Route path='dashboard' element={<DashBoard/>}>
        <Route path='patientlist' element={<PatientList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
