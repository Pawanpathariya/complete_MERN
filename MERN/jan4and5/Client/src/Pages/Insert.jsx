import { useState } from "react"
import axios from "axios"
import {message} from "antd"
const Insert = () => {
    const [input, setInput] = useState({})
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        let api = "http://localhost:8000/student/datasave";
        await axios.post(api, input).then((res) => {
            console.log("data save")
            message.success("Data Inserted Successfully")   
            
            setInput({
                name: "",
                city: "",
                course: "",
                fees: ""
            })
        })
    }
    return (
        <>
            <h1 style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>Insert Page</h1>
            <div id="form" style={{ border: "1px solid black", padding: "50px", borderRadius: "10px", width: "400px", margin: "0 auto" ,marginBottom:"50px", textAlign:"center",backgroundColor:"aqua"}}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>Enter Name </label>
                <input type="text" name="name"value={input.name} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px" ,borderRadius:"5px"}} />

                <label htmlFor="city" style={{ display: "block", marginBottom: "10px" }}>Enter City</label>
                <input type="text" name="city" value={input.city} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px" ,borderRadius:"5px"}} />

                <label htmlFor="course" style={{ display: "block", marginBottom: "10px" }}>Enter Course</label>
                <input type="text" name="course" value={input.course} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px" ,borderRadius:"5px"}} />

                <label htmlFor="fees" style={{ display: "block", marginBottom: "10px" }}>Enter Fees</label>
                <input type="text" name="fees" value={input.fees} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px" ,borderRadius:"5px"}} />

                <button onClick={handleSubmit} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer",marginTop:"20px"  }}>Save</button>
            </div>
        </>
    )
}

export default Insert
