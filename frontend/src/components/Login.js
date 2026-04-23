import { useState } from "react";
import axios from "axios";

function Login({ setShowRegister }) {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        data
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Success ✅");
      window.location.reload();
    } catch {
      alert("Login Failed ❌");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f') center/cover no-repeat"
      }}
    >
      {/* Dark Blur */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(5px)"
        }}
      ></div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.95)",
          padding: "25px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ textAlign: "center" }}>🔐 Login</h2>

        <input
          placeholder="Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>

        {/* Switch to Register */}
        <p style={{ textAlign: "center" }}>
          Don't have an account?
        </p>

        <button
          style={{ background: "#22c55e" }}
          onClick={() => setShowRegister(true)}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;