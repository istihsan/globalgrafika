const MONGO_URI = "mongodb+srv://istihsan:Ib17092001@globalgrafika.2z6gtbf.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/globalgrafika', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

module.exports = db;
