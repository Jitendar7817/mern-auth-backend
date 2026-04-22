import React, { useState } from "react";
import axios from "axios";

const API = "https://mern-auth-backend-ur14.onrender.com/api";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await axios.post(`${API}/register`, data);
      alert("Registered Successfully ✅");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.msg || "Error ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow-lg border-0 p-4" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-3 fw-bold">Create Account</h3>
        <p className="text-center text-muted mb-4">Register to continue</p>

        <input
          className="form-control mb-3"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn btn-success w-100 mb-3" onClick={register}>
          Create Account
        </button>

        <div className="text-center">
          <small>
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none fw-semibold">
              Login
            </a>
          </small>
        </div>

      </div>

    </div>
  );
}

export default Register;