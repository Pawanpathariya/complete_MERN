import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BASE_URL from '../confiq';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const Login=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
const handleSubmit = async(e) => {
    e.preventDefault()
    console.log({email, password})
    let api=`${BASE_URL}/doctors/login`
    try {
       let response= await axios.post(api,{email, password})
      localStorage.setItem("doctorName", response.data.doctorName);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("id", response.data._id);
      toast.success("Login Successfull")
   navigate('/dashboard')
    } catch (error) {
      console.log(error)
     toast.error(error.response.data)
    }

}

return(
    <>

    <div id="login">
    <h1>Login Page</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
   
    </div>
    <ToastContainer/>
    </>
)
}

export default Login