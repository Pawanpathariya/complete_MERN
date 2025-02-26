import { useState } from "react"
import BASE_URL from "../confiq"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const Register=()=>{
    const [doctorName, setDoctorName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [mobile, setMobile] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const specializations = ['Cardiologist', 'Dermatologist', 'Gastroenterologist', 'General Physician', 'Neurologist', 'Orthopedic', 'Pediatrician', 'Psychiatrist']

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log({doctorName, address, city, mobile, specialization, email, password})
        let api=`${BASE_URL}/doctors/register`
        try {
           let response= await axios.post(api,{doctorName, address, city, mobile, specialization, email, password})
           toast.success(response.data.msg)
        } catch (error) {
            console.log(error)
          toast.error(error.response.data.msg)
        }
        
    }

    return(
        <>
        <div id='register'>
            <h4>Doctor Registration Form</h4>
        <form onSubmit={handleSubmit}>
            <label>
                Doctor Name:
                <input type="text" value={doctorName} onChange={(e)=>setDoctorName(e.target.value)} />
            </label><br />
            <label>
                Address:
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
            </label><br />
            <label>
                City:
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
            </label><br />
            <label>
                Mobile:
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            </label><br />
            <label>
                Specialization:
                <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)}>
                    <option value="">Select</option>
                    {specializations.map(specialization => <option key={specialization} value={specialization}>{specialization}</option>)}
                </select>
            </label><br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label><br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label><br />
            <button type="submit">Register</button>
        </form>
        </div>
        <ToastContainer />
        </>
    )
}

export default Register
