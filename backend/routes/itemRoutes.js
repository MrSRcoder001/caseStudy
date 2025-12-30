const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  createItem,
  getItem,
  updateItem,
  deleteItem
} = require("../controllers/itemController");

const router = express.Router();

router.post("/", auth, createItem);
router.get("/:id", auth, getItem);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

module.exports = router;
