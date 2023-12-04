const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
    {
      prices: [
        {
          type_page: {
            type: String,
            required: true,
          },
          price: {
            type: String,
            required: true,
          },
        },
      ],
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Price", priceSchema);
