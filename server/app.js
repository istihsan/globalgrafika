require("dotenv").config();
// const bodyParser = require("body-parser");
// const formidableMiddleware = require("express-formidable");
const express = require("express");
const db = require("./db/index");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");
const app = express();
const cors = require("cors");
const multer = require("multer");
const uploads = multer();

const { Storage } = require("@google-cloud/storage");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use(express.json());
app.use(uploads.array());
app.use(express.static("public"));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const storage = new Storage({
  projectId: "big-oxygen-413514",
  keyFilename: "big-oxygen-413514-63f58993c739.json"
});

const bucket = storage.bucket("globalgrafikabucket");

const storageMulter = multer.memoryStorage(); // or any other storage strategy as needed

const upload = multer({
  storage: storageMulter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50 MB limit
  }
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/login", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
