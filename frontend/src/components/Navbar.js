function Navbar() {
  return (
    <div style={{
      background: "#2563eb",
      color: "white",
      padding: "12px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h2>🔍 Lost & Found</h2>

      <button style={{
        width: "100px",
        background: "#ef4444"
      }}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;