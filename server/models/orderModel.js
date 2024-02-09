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
    referenceFile: {
      type: String,
      required: false
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
      enum: [
        "Dibatalkan",
        "Menunggu Pembayaran",
        "Dalam Proses",
        "Telah Dikirim",
        "Selesai"
      ],
      required: true
    },
    orderItem: [
      {
        title: { type: String, required: true },
        productVariant: { type: String },
        productImageUrl: { type: String, required: false },
        quantity: { type: Number, required: true },
        unit: { type: String },
        customerNotes: { type: String, required: false },
        price: { type: Number, required: true }
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
