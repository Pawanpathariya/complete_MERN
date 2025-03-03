import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState("");

  const handleInsert = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset","pawan_cloud");
    formData.append('cloud_name','dbwpnzi57');
    const api='https://api.cloudinary.com/v1_1/dbwpnzi57/image/upload';
    const response = await axios.post(api, formData);
    let api1 = "http://localhost:8080/student/datasave";
    let response1=await axios.post(api1,{name,rollno,city,imgurl:response.data.url});
    alert(response1.data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", backgroundColor: "#1e1e1e", color: "#39ff14", fontFamily: "monospace" ,width:'400px',margin:'auto',marginTop:'100px',borderRadius:'10px',boxShadow:'10px 0px 10px rgb(5, 23, 2)'}}>
      <h1 style={{ margin: "20px 0", borderBottom: "2px solid #39ff14" }}>Insert</h1>
      <form >
        <label>
          Enter Name :-
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Enter Rollno :-
          <input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Enter City :-
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Select File :-
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <button onClick={handleInsert} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "10px 20px", margin: "10px 0" }}>Insert</button>
      </form>
    </div>
  );
};

export default Insert;
