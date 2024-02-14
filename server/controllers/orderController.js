const Order = require("../models/orderModel");
const mongoose = require("mongoose");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "big-oxygen-413514",
  keyFilename: "config.json"
});
const bucket = storage.bucket("globalgrafikabucket");

const uploadFileToBucket = async file => {
  try {
    if (!file || file.length === 0) {
      // return [];
    }

    const promises = file.map(({ originalname, mimetype, buffer }) => {
      const blob = bucket.file(`${originalname}_${Date.now()}`);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: mimetype
        },
        resumable: false
      });

      return new Promise((resolve, reject) => {
        blobStream.on("error", err => {
          reject(err);
        });

        blobStream.on("finish", () => {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          // console.log(publicUrl);
          blob.makePublic().then(() => {
            resolve(publicUrl);
          });
        });

        blobStream.end(buffer);
      });
    });
    const publicUrls = await Promise.all(promises);
    // console.log("All files uploaded successfully:", publicUrls);
    return publicUrls;

    // Promise.all(promises)
    //   .then(publicUrls => {
    //     console.log("All files uploaded successfully:", publicUrls);
    //     return publicUrls;
    //   })
    //   .catch(err => {
    //     console.error("Error uploading files:", err);
    //   });

    // console.log(file);
    // const fileName = `${Date.now()}-${file.originalname}`;
    // console.log("Upload to File Bucket");
    // const fileUpload = bucket.file(fileName);
    // const stream = fileUpload.createWriteStream({
    //   metadata: {
    //     contentType: file.mimetype,
    //     name: fileName
    //   }
    // });

    // stream.on("error", error => {
    //   console.error(error);
    //   throw new Error("Error uploading to GCS");
    // });

    // stream.on("finish", () => {
    //   console.log(`File uploaded to: ${fileName}`);
    // });

    // stream.end(file.buffer);
    // return fileName;
    // }
  } catch (error) {
    console.error(error);
    throw new Error("Error uploading to GCS");
  }
};

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
  // console.log(req.body.orderItem);
  try {
    let counter = 0;
    let fileUrls = [];
    if (req.files) {
      fileUrls = await uploadFileToBucket(req.files);
    }
    console.log(fileUrls);
    const parsedOrderItem = JSON.parse(req.body.orderItem);
    const fileData = Array.from(
      { length: parsedOrderItem.length },
      (_, index) => {
        const item = parsedOrderItem[index];
        const hasPicture = index === item.fileIndex && item.fileIndex !== null;
        const newItem = {
          title: item.title,
          productVariant: item.productVariant,
          productImageUrl: item.productImageUrl,
          quantity: item.quantity,
          unit: item.unit,
          customerNotes: item.customerNotes,
          price: item.price
        };

        if (hasPicture) {
          const copyItem = { ...newItem, referenceFile: fileUrls[counter] };
          counter++;
          return copyItem;
        }
        return newItem;
      }
    );
    console.log(fileData);
    // const orderItems = parsedOrderItem.map(item => {
    //   console.log({ index: item.fileIndex, url: newItem.referenceFile });
    //   // console.log(newItem.referenceFile, "INI Link");
    //   return newItem;
    // });

    const orderData = {
      customerName: req.body.customerName,
      customerAddress: req.body.customerAddress,
      customerEmailAddress: req.body.customerEmailAddress,
      customerPhoneNum: req.body.customerPhoneNum,
      totalOrder: req.body.totalOrder,
      externalPaymentid: req.body.externalPaymentid,
      orderStatus: req.body.orderStatus,
      orderItem: fileData,
      cancellationReason: req.body.cancellationReason,
      deliveryOption: req.body.deliveryOption
    };

    const orders = await Order.create(orderData);
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
