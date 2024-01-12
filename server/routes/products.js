const express = require("express");
const router = express.Router();
const {
  createProduct,
  getOneProduct,
  getAllProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");

// router.get("/unit-type", (req, res) => {
//   const UNIT_TYPE_ENUM = { pcs: "pcs", m2: "m2" };
//   try {
//     return res.json(UNIT_TYPE_ENUM);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", getAllProduct);
router.get("/:id", getOneProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

module.exports = router;
