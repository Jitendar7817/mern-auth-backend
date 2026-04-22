const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ================= Middleware =================
app.use(express.json());
app.use(cors());

// ================= MongoDB Atlas =================
const MONGO_URL =
  "mongodb://Kiet:Kiet%40123@ac-dr21pvs-shard-00-00.jwfgcci.mongodb.net:27017,ac-dr21pvs-shard-00-01.jwfgcci.mongodb.net:27017,ac-dr21pvs-shard-00-02.jwfgcci.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-vdc44t-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch((err) => console.log("DB Error ❌:", err));

// ================= Routes =================
app.use("/api", require("./routes/auth"));

// ================= Test Route =================
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ================= Server Start =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🔥`);
});