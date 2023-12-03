const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    file_name: {
      type: String,
    },
    number_page: {
      type: String,
    },
    print_name: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
