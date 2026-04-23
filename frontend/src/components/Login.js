import { useState } from "react";
import axios from "axios";

function Login() {
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
    } catch (err) {
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
      {/* 🔥 Dark Blur Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(5px)"
        }}
      ></div>

      {/* 🧊 Login Card */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.95)",
          padding: "25px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          transition: "0.3s"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          🔐 Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;