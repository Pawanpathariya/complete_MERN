import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import BASE_URL from "../confiq";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Appointment=()=>{
    const navigate=useNavigate();
const {id}=useParams();
const [docdata,setdocdata]=useState({});
const [patientdata,setpatientdata]=useState({});
const loadData=async()=>{
let api=`${BASE_URL}/doctors/loadDoctor/?id=${id}`
try {
  const response=await axios.get(api)
  setdocdata(response.data)
} catch (error) {
    console.log(error)
}
}

useEffect(()=>{
    loadData();
},[])

const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/patients/bookAppointment`
    try {
        const response=await axios.post(api,{
            doctorId:id,...patientdata
        })
      toast.success(response.data)
    } catch (error) {
        toast.error(error)
    }
}

    return(
        <>
        <div className="container" style={{marginBottom:"30px"}}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h1>Booking Appointment form </h1>
                            <h3>Doctor name : Dr. {docdata.doctorName} <br/> Speciality : {docdata.specialization}</h3>
                        </div>
                        <div className="card-body">
                            <form id="formpatient">
                                <label>Patient Name:</label>
                                <input type="text" value={patientdata.patientName} onChange={(e)=>setpatientdata({...patientdata,patientName:e.target.value})} className="form-control" /><br />
                                <label>Patient Age:</label>
                                <input type="number" value={patientdata.patientAge} onChange={(e)=>setpatientdata({...patientdata,patientAge:e.target.value})} className="form-control" /><br />
                                <label>Patient Gender:</label>
                                <select value={patientdata.patientGender} onChange={(e)=>setpatientdata({...patientdata,patientGender:e.target.value})} className="form-select">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select><br />
                                <label>Patient Address:</label>
                                <input type="text" value={patientdata.patientAddress} onChange={(e)=>setpatientdata({...patientdata,patientAddress:e.target.value})} className="form-control" /><br />
                                <label>Patient Mobile:</label>
                                <input type="text" value={patientdata.patientMobile} onChange={(e)=>setpatientdata({...patientdata,patientMobile:e.target.value})} className="form-control" /><br />
                                <label>Patient Disease:</label>
                                <input type="text" value={patientdata.patientDisease} onChange={(e)=>setpatientdata({...patientdata,patientDisease:e.target.value})} className="form-control" /><br />
                                <label>Patient Email:</label>
                                <input type="email" value={patientdata.patientEmail} onChange={(e)=>setpatientdata({...patientdata,patientEmail:e.target.value})} className="form-control" /><br />
                                <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <ToastContainer/>

        </>
    )
}


export default Appointment;
