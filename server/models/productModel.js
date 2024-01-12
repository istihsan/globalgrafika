const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    descriptionMain: {
      type: String,
      required: false
    },
    descriptionSecondary: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      enum: ["pcs", "kg", "msquared", "test"],
      required: true
    },
    categories: {
      type: String,
      enum: [
        "digitalprintingsmall",
        "digitalprintinglarge",
        "officesupplies",
        "merchandise"
      ],
      required: true
    },
    productImageUrl: {
      type: String,
      required: false
    },
    productVariant: {
      type: [String],
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
