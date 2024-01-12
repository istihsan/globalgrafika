const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Sama kaya di localstorage,,, notes dan customtemplateimageurl di checkout
// interface Product {
//   title: string;
//   price: number;
//   quantity: number;
//   selectedVariant: string;
//   notes: string;
//   customTemplateImageUrl: string;
// }

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
    customerPhoneNum: {
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
      required: true
    },
    orderItem: {
      type: JSON
    },
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
