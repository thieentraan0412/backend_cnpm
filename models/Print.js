const mongoose = require("mongoose");

const printSchema = new mongoose.Schema(
  {
    print_name: {
      type: String,
      required: true,
    },
    build_name: {
      type: String,
      required: true,
    },
    room_number: {
      type: String,
      required: true,
    },
    number_page: {
      type: String,
    },
    page_balance: {
      type: String,
      default: 0,
    },
    trademark : {
        type: String,
    },
    status : {
      type: String,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Print", printSchema);
