const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    billNumber: {
      type: String,
      trim: true
    },

    purchaseDate: {
      type: Date,
      required: true
    },

    amount: {
      type: Number,
      required: true,
      min: 0
    },

    file: {
      originalName: {
        type: String,
        trim: true
      },

      storedName: {
        type: String,
        trim: true
      },

      path: {
        type: String,
        trim: true
      },

      mimeType: {
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