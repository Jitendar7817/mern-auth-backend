import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const API = "https://mern-auth-backend-ur14.onrender.com/api";

function Dashboard() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});
  const [course, setCourse] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API}/me`, {
          headers: { Authorization: token }
        });
        setUser(res.data);
      } catch {
        alert("Error fetching user");
      }
    };

    if (!token) {
      window.location.href = "/login";
    } else {
      fetchUser();
    }
  }, [token]);

  const updateCourse = async () => {
    try {
      await axios.put(`${API}/update-course`, { course }, {
        headers: { Authorization: token }
      });

      const res = await axios.get(`${API}/me`, {
        headers: { Authorization: token }
      });
      setUser(res.data);

      alert("Course Updated ✅");
      setCourse("");
    } catch {
      alert("Error updating course ❌");
    }
  };

  const updatePassword = async () => {
    try {
      await axios.put(`${API}/update-password`, { oldPassword, newPassword }, {
        headers: { Authorization: token }
      });

      alert("Password Updated ✅");
      setOldPassword("");
      setNewPassword("");
    } catch {
      alert("Error updating password ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        {/* 👤 Profile Card */}
        <div className="card shadow-lg border-0 p-4 mb-4 text-center">
          <h3 className="mb-2">Welcome, {user.name}</h3>
          <p className="text-muted mb-1">{user.email}</p>
          <span className="badge bg-primary px-3 py-2">
            Course: {user.course}
          </span>
        </div>

        <div className="row">

          {/* 🎓 Update Course */}
          <div className="col-md-6">
            <div className="card shadow border-0 p-4 mb-4">
              <h5 className="mb-3 text-primary">🎓 Update Course</h5>

              <input
                className="form-control mb-3"
                placeholder="Enter new course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />

              <button className="btn btn-primary w-100" onClick={updateCourse}>
                Update Course
              </button>
            </div>
          </div>

          {/* 🔑 Update Password */}
          <div className="col-md-6">
            <div className="card shadow border-0 p-4 mb-4">
              <h5 className="mb-3 text-warning">🔑 Change Password</h5>

              <input
                className="form-control mb-2"
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button className="btn btn-warning w-100" onClick={updatePassword}>
                Update Password
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;