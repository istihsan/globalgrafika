const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: false
    },
    customerAddress: {
      type: String,
      required: false
    },
    customerEmailAddress: {
      type: String,
      required: false
    },
    customerPhoneNum: {
      type: Number,
      required: false
    },
    referenceFile: {
      type: String,
      required: false
    },
    totalOrder: {
      type: Number,
      required: false
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
      required: false
    },
    orderItem: [
      {
        title: { type: String, required: false },
        productVariant: { type: String },
        productImageUrl: { type: String, required: false },
        quantity: { type: Number, required: false },
        unit: { type: String },
        customerNotes: { type: String, required: false },
        price: { type: Number, required: false },
        referenceFile: { type: String, required: false }
      }
    ],
    cancellationReason: {
      type: String,
      required: false
    },
    deliveryOption: {
      type: String,
      enum: ["JNE", "Pos Indonesia", "SiCepat"],
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
