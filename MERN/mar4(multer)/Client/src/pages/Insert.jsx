import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [name, setName] = useState("");
  const [Empno, setEmpno] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");
  const [file, setFile] = useState("");

  const handleInsert = async (e) => {
    e.preventDefault();
 const formData = new FormData();
 formData.append("name", name);
 formData.append("empno", Empno);
 formData.append("city", city);
 formData.append("designation", designation);
 formData.append("image", file);

    try {
      let api = "http://localhost:8080/employee/insert";
      const response = await axios.post(api, formData);
      alert(response.data);
    }
catch(error){
alert("Data is not inserted");
}
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
          Enter Empno :-
          <input type="number" value={Empno} onChange={(e) => setEmpno(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Enter City :-
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Enter Designation :-
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <label>
          Upload Photo :-
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label> <br />
        <button onClick={handleInsert} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "10px 20px", margin: "10px 0" }}>Insert</button>
      </form>
    </div>
  );
};

export default Insert;
