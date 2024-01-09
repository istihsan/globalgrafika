const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerid: {
      type: Number,
      required: true,
    },
    templateid: {
      type: Number,
      required: false,
    },
    paymentid: {
      type: Number,
      required: false,
    },
    changeDescription: {
      type: String,
      required: false,
    },
    orderStatus: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymenStatus: {
      type: Boolean,
      required: true,
    },
    cancellationStatus: {
      type: Boolean,
      required: true,
    },
    cancellationReason: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
