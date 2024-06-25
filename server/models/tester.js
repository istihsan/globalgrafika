const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testerSchema = new Schema({
  title: {
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
  stock: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Tester", testerSchema);
