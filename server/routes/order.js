const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createOrder,
  getOneOrder,
  getAllOrder,
  deleteOrder,
  updateOrder
} = require("../controllers/orderController");

const upload = multer({ dest: "uploads/" });

router.get("/", getAllOrder);
router.get("/:id", getOneOrder);
router.post("/", upload.single("file"), createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrder);

module.exports = router;
