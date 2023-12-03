const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    number_page: {
        type: String,
      },
    price: {
      type: String,
    },
    status: {
        type: String,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
