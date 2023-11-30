const mongoose = require("mongoose");

const printSchema = new mongoose.Schema(
  {
    number_page: {
      type: String,
    },
    build_name: {
      type: String,
      required: true,
    },
    room_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    page_balance: {
      type: String,
      default: 0,
    },
    trademark : {
        type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Print", printSchema);
