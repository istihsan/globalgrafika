const express = require('express');
const router = express.Router();
const Product = require('../models/product');
import axios from 'axios';


router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;