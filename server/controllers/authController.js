const Admin = require("../models/adminModel");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const getAllAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new Admin({ username, password });
    await newUser.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await admin.comparePassword(password);
    if (isMatch) {
      const token = jwt.sign({ id: admin._id }, "your-secret-key", {
        expiresIn: "1h"
      });
      return res.json({ success: true, token: `Bearer ${token}` });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

module.exports = {
  Login,
  Register,
  getAllAdmin
};
