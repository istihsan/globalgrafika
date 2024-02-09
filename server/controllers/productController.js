const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    if (!products) {
      return res.status(404).json({ error: error.message });
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      descriptionMain: req.body.descriptionMain,
      descriptionSecondary: req.body.descriptionSecondary,
      stock: req.body.stock,
      unit: req.body.unit,
      categories: req.body.categories,
      productImageUrl: req.body.productImageUrl,
      productVariants: req.body.productVariants || []
    });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    if (!product) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    } else {
      res.status(200).json("Berhasil di Hapus" + product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!product) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    } else {
      res.status(200).json("Berhasil di Update" + product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProduct,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct
};
