const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    unique: true,
    required: true
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
