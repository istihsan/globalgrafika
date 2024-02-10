const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerGoogleStorage = require("multer-google-storage");
const {
  createOrder,
  getOneOrder,
  getAllOrder,
  deleteOrder,
  updateOrder
} = require("../controllers/orderController");

const upload = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    bucket: "globalgrafikabucket",
    projectId: "big-oxygen-413514",
    keyFilename: "../server/big-oxygen-413514-63f58993c739.json",
    fileName: (req, file, cb) => {
      console.log("HALO");
      cb(null, `/uploads/test1`);
    }
  })
});

router.get("/", getAllOrder);
router.get("/:id", getOneOrder);
router.post("/", upload.single("file"), createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrder);

module.exports = router;
