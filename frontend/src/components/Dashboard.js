import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");

  // 🔥 IMPORTANT: अपना backend URL यहाँ डालो
  const API = "https://mern-auth-backend-ur14.onrender.com";

  // 📥 Fetch items
  const fetchItems = () => {
    axios
      .get(`${API}/api/items`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 🔄 Load items on page load
  useEffect(() => {
    fetchItems();
  }, []);

  // ➕ Add item
  const addItem = async () => {
    if (!itemName || !location) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      await axios.post(`${API}/api/items`, {
        itemName,
        location,
      });

      alert("Item Added ✅");

      // 🔥 Refresh items list without reload
      fetchItems();

      // Clear input fields
      setItemName("");
      setLocation("");
    } catch (err) {
      alert("Error adding item ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Lost & Found Items</h2>

        {/* ➕ Add Item Section */}
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Add New Item</h3>

          <input
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button onClick={addItem}>Add Item</button>
        </div>

        {/* 📦 Items Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {items.length === 0 ? (
            <p>No items found</p>
          ) : (
            items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <h3>{item.itemName}</h3>
                <p style={{ color: "gray" }}>{item.location}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;