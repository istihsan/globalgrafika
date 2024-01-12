const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");
const {
  Login,
  Register,
  getAllAdmin
} = require("../controllers/authController");

router.post("/", Login);
// router.get("/", getAllAdmin);
router.post("/register", Register);

// router.post("/", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }
//     const isMatch = await admin.comparePassword(password);
//     if (isMatch) {
//       const token = jwt.sign({ id: admin._id }, "your-secret-key", {
//         expiresIn: "1h"
//       });
//       return res.json({ success: true, token: `Bearer ${token}` });
//     } else {
//       return res
//         .status(401)
//         .json({ success: false, message: "Incorrect password" });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Login failed" });
//   }
// });

module.exports = router;
