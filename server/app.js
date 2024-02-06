require("dotenv").config();
const express = require("express");
const db = require("./db/index");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(express.json());

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/login", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
