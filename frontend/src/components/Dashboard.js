import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios.get("https://mern-auth-backend-ur14.onrender.com/api/items")
      .then(res => setItems(res.data));
  }, []);

  const addItem = async () => {
    await axios.post("", {
      itemName,
      location
    });

    alert("Item Added");
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Lost & Found Items</h2>

        {/* Add Item */}
        <div style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h3>Add New Item</h3>

          <input placeholder="Item Name"
            onChange={e => setItemName(e.target.value)}
          />

          <input placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />

          <button onClick={addItem}>Add Item</button>
        </div>

        {/* Items Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: "white",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
              <h3>{item.itemName}</h3>
              <p style={{ color: "gray" }}>{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;