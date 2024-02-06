const Order = require("../models/orderModel"); // Adjust the path accordingly

const fileUpload = async (req, res) => {
  try {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;

    // Update the referenceFile field in the order document
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId, // Assuming the order ID is part of the URL parameters
      { $set: { "referenceFile.url": fileUrl } },
      { new: true }
    );

    res.json({ message: "File uploaded successfully", order: updatedOrder });
  } catch (error) {
    console.error("Error uploading file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fileUpload
};
