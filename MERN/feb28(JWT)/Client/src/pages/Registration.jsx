import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({});

  const handleRegister = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitRegister = async () => {
    let api = `http://localhost:8080/student/registeration`;
    try {
      let res = await axios.post(api, register);
      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#1e1e1e",
        color: "#39ff14",
        fontFamily: "monospace",
        width: "400px",
        margin: "auto",
        marginTop: "100px",
        borderRadius: "10px",
        boxShadow: "10px 0px 10px rgb(5, 23, 2)",
      }}
    >
      <h1 style={{ margin: "20px 0", borderBottom: "2px solid #39ff14" }}>
        Registration
      </h1>
      <label>
        Enter Name :-
        <input
          type="text"
          name="name"
          value={register.name || ""}
          onChange={handleRegister}
          style={{
            backgroundColor: "#333",
            color: "#39ff14",
            border: "1px solid #39ff14",
            padding: "5px",
            margin: "10px 0",
          }}
        />
      </label>
      <label>
        Enter City :-
        <input
          type="text"
          name="city"
          value={register.city || ""}
          onChange={handleRegister}
          style={{
            backgroundColor: "#333",
            color: "#39ff14",
            border: "1px solid #39ff14",
            padding: "5px",
            margin: "10px 0",
          }}
        />
      </label>
      <label>
        Enter Email :-
        <input
          type="email"
          name="email"
          value={register.email || ""}
          onChange={handleRegister}
          style={{
            backgroundColor: "#333",
            color: "#39ff14",
            border: "1px solid #39ff14",
            padding: "5px",
            margin: "10px 0",
          }}
        />
      </label>
      <label>
        Enter Password :-
        <input
          type="password"
          name="password"
          value={register.password || ""}
          onChange={handleRegister}
          style={{
            backgroundColor: "#333",
            color: "#39ff14",
            border: "1px solid #39ff14",
            padding: "5px",
            margin: "10px 0",
          }}
        />
      </label>
      <button
        onClick={submitRegister}
        style={{
          backgroundColor: "#333",
          color: "#39ff14",
          border: "1px solid #39ff14",
          padding: "10px 20px",
          margin: "10px 0",
        }}
      >
        Register
      </button>
      <button
        onClick={() => navigate("/login")}
        style={{
          backgroundColor: "#333",
          color: "#39ff14",
          border: "1px solid #39ff14",
          padding: "10px 20px",
          margin: "10px 0",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Registration;
