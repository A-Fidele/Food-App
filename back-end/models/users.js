const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  token: String,
  avatar: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
