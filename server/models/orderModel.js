const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true
    },
    customerAddress: {
      type: String,
      required: true
    },
    customerEmailAddress: {
      type: String,
      required: true
    },
    customerPhoneNum: {
      type: Number,
      required: true
    },
    totalOrder: {
      type: Number,
      required: true
    },
    externalPaymentid: {
      type: Number,
      required: false
    },
    orderStatus: {
      type: String,
      enum: ["Gagal", "Dalam Proses", "Telah Dikirim", "Selesai"],
      required: false
    },
    orderItem: [
      // Change to an array of objects for order items
      {
        title: { type: String, required: true },
        productVariant: { type: String },
        quantity: { type: Number, required: true },
        unit: { type: String },
        price: { type: Number, required: true }
        // Add other fields if needed
      }
    ],
    cancellationReason: {
      type: String,
      required: false
    },
    deliveryOption: {
      type: String,
      enum: ["JNE", "Pos Indonesia", "SiCepat"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
