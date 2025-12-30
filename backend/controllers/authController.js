const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const token = jwt.sign({ id: user._id }, "SECRET_KEY");
  res.json({ token });
};
