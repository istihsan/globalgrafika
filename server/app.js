const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/index");
const Product = require("./models/product");
const test = require('./routes/tester')
const app = express();
const port = 3000;
const cors = require("cors");

app.use(bodyParser.json());

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use(cors());

app.use('/test', test)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
