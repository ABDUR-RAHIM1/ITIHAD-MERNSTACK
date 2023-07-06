const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  roll: {
    type: String,
    default: "member"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
