const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOneOrder,
  getAllOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

router.get("/", getAllOrder);
router.get("/:id", getOneOrder);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrder);

module.exports = router;
