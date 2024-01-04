const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  stock:{
    type: Number,
    required: true
  }
}, {timestamps: true})

// const Product = mongoose.model("Product", {
//   name: String,
//   description: String,
//   price: Number,
// });

module.exports = mongoose.model('Product', productSchema)