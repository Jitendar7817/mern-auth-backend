const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ================= Middleware =================
app.use(express.json());
app.use(cors());

// ================= MongoDB Atlas (NON-SRV) =================
mongoose.connect(
  "mongodb://Kiet:Kiet%40123@ac-dr21pvs-shard-00-00.jwfgcci.mongodb.net:27017,ac-dr21pvs-shard-00-01.jwfgcci.mongodb.net:27017,ac-dr21pvs-shard-00-02.jwfgcci.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-vdc44t-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => console.log("DB Error:", err));

// ================= Routes =================
app.use("/api", require("./routes/auth"));

// ================= Server Start =================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});