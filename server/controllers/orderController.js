const Order = require("../models/orderModel");
const mongoose = require("mongoose");

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getOneOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findById(id);
    if (!orders) {
      return res.status(404).json({ error: error.message });
    } else {
      res.json(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    let fileUrl = null;
    if (req.file) {
      fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
    }
    const orders = await Order.create({
      customerName: req.body.customerName,
      customerAddress: req.body.customerAddress,
      customerEmailAddress: req.body.customerEmailAddress,
      customerPhoneNum: req.body.customerPhoneNum,
      customerNotes: req.body.customerNotes,
      referenceFile: fileUrl,
      totalOrder: req.body.totalOrder,
      externalPaymentid: req.body.externalPaymentid,
      orderStatus: req.body.orderStatus,
      orderItem: req.body.orderItem,
      cancellationReason: req.body.cancellationReason,
      deliveryOption: req.body.deliveryOption
    });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }
  try {
    const order = await Order.findOneAndDelete({ _id: id });
    if (!order) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    } else {
      res.status(200).json("Berhasil di Hapus" + order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!order) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    } else {
      res.status(200).json("Berhasil di Update" + order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOrder,
  getOneOrder,
  createOrder,
  deleteOrder,
  updateOrder
};
