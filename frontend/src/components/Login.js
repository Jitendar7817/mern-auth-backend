import React, { useState } from "react";
import axios from "axios";

const API = "https://mern-auth-backend-ur14.onrender.com/api";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, data);

      localStorage.setItem("token", res.data.token);
      alert("Login Success ✅");

      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.msg || "Invalid Credentials ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow-lg border-0 p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">🔐 Login</h3>

        <input
          className="form-control mb-3"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100 mb-2" onClick={login}>
          Login
        </button>

        <p className="text-center mt-2">
          New user? <a href="/">Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;