const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true
    },
    file:{
        originalname: {
        type: String,
        trim: true
      },

      filename: {
        type: String,
        trim: true
      },

      path: {
        type: String,
        trim: true
      },

      mimetype: {
        type: String,
        trim: true
      },
      size: {
        type: Number,
        min: 0
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("bills", billSchema);