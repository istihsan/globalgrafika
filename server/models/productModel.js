const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productVariantsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

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
    productVariants: [productVariantsSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
