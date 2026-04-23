import { useState } from "react";
import axios from "axios";

function Register({ setShowRegister }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/register",
        data
      );

      alert("Registered Successfully ✅");
      setShowRegister(false);
    } catch {
      alert("Registration Failed ❌");
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
        <h2 style={{ textAlign: "center" }}>📝 Register</h2>

        <input
          placeholder="Name"
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

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

        <button onClick={handleRegister}>
          Register
        </button>

        {/* Back to Login */}
        <p style={{ textAlign: "center" }}>
          Already have an account?
        </p>

        <button
          style={{ background: "#2563eb" }}
          onClick={() => setShowRegister(false)}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;