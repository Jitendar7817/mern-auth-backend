import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const token = localStorage.getItem("token");

  if (token) return <Dashboard />;

  return showRegister ? (
    <Register setShowRegister={setShowRegister} />
  ) : (
    <Login setShowRegister={setShowRegister} />
  );
}

export default App;