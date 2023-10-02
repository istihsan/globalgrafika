const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/globalgrafika', { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
