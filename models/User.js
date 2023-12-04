const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    address: {
      type: String,
    },
    A3_page_balance: {
      type: String,
      default: 20,
    },
    A4_page_balance: {
      type: String,
      default: 20,
    },
    sex: {
      type: String,
    },
    img: {
      type: String,
    },
    status: {
      type: String,
    },
    banking: {
      type: String,
    },
    momo: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
