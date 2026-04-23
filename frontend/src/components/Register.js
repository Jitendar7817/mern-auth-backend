import { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", data);
      alert("Registered Successfully");
    } catch {
      alert("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})}/>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;