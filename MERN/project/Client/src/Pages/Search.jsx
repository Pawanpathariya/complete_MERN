import { useState } from "react"
import BASE_URL from "../confiq"
import axios from "axios"
const Search=()=>{
    const [doctor,setdocotor]=useState([]);
    const [doctorName,setdoctorName]=useState('');
    const [specialization,setspecialization]=useState('');
    
 const handleSubmit=async(e)=>{
     e.preventDefault()
        let api=`${BASE_URL}/doctors/search`
        try {
            let response=await axios.post(api,{doctorName,specialization})
            console.log(response.data)
             setdocotor(response.data)
        } catch (error) {
          alert(error.response.data)
        }
    }
    const ans=doctor.map((key)=>{
        return(
            <tr>
                <td>{key.doctorName}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.specialization}</td>
                <td>{key.email}</td>
            </tr>
        )
    })
    
    return(
        <>
        <div id="search">
        <h1>Search Page</h1>

        <form>
            <label>
                Doctor Name:
                <input type="text" name="doctorName" onChange={(e)=>setdoctorName(e.target.value)} />
            </label><br />
            <label> <br />
                Specialization:
                <select name="specialization" onChange={(e)=>setspecialization(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                </select>
            </label><br /> <br />
            <button onClick={handleSubmit}>Search</button>
            <br /> <br />

        </form>

        </div>
        <div id="table">
<table border="1" style={{width:'80%',margin:'auto',marginBottom:'40px'}} id="searchTable">
<tr>
    <th >Doctor Name</th>
    <th>Specialization</th>
    <th>Address</th>
    <th>City</th>
    <th>Mobile</th>
    <th>Email</th>
</tr>
    {ans}

</table>
        </div>
        </>
    )
    
}
    
    export default Search