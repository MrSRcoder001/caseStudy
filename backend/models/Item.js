const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model("Item", itemSchema);
