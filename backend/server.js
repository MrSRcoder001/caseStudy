const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/case_study")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
// app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
