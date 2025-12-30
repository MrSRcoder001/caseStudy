const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  const item = await Item.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(item);
};

exports.getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
