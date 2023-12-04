const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    file_name: {
      type: String,
      required: true,
    },
    number_page: {
      type: String,
      required: true,
    },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
