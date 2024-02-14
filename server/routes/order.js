const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const {
  createOrder,
  getOneOrder,
  getAllOrder,
  deleteOrder,
  updateOrder
} = require("../controllers/orderController");

const storage = new Storage({
  projectId: "big-oxygen-413514",
  keyFilename: "../server/config.json"
});

// storage.getBuckets().then(x => console.log(x));
const bucket = storage.bucket("globalgrafikabucket");

var uploadHandler = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

router.get("/", getAllOrder);
router.get("/:id", getOneOrder);
router.post(
  "/",
  uploadHandler.array(`image[]`, 12),
  (req, res, next) => {
    console.log(req.body, req.files);
    if (!req.files || req.files.length === 0) {
      return res.status(500).send("No files were uploaded.");
    }

    const promises = req.files.map(({ originalname, mimetype, buffer }) => {
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
          console.log(publicUrl);
          blob.makePublic().then(() => {
            resolve(publicUrl);
          });
        });

        blobStream.end(buffer);
      });
    });

    Promise.all(promises)
      .then(publicUrls => {
        console.log("All files uploaded successfully:", publicUrls);
        next();
      })
      .catch(err => {
        console.error("Error uploading files:", err);
        next(err);
      });
  },
  // (req, res, next) => {
  //   // This is showing the req.file is being passed through
  //   console.log(req.files, "SESUDAH");
  //   if (!req.files || req.files.length === 0) {
  //     return res.status(500).send("No files were uploaded.");
  //   }
  //   const blob = bucket.file(`${originalname}_${Date.now()}`);
  //   const blobStream = blob.createWriteStream({
  //     metadata: {
  //       contentType: req.file.mimetype
  //     },
  //     resumable: false
  //   });
  // The err is not getting console logged even though it is not saving to the google cloud bucket properly?
  // blobStream.on("error", err => {
  //   next(err);
  //   console.log(err);
  //   return;
  // });
  // The publicUrl is not getting console.logged - presumably cause something is breaking before this and it won't save it
  // blobStream.on("finish", () => {
  //   // the public url can be used to directly access the file via HTTP
  //   const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  //   console.log(publicUrl);
  //   // Make the image public to the web (since we'll be displaying it in the browser)
  //   blob.makePublic().then(() => {
  //     res.status(200).send(`Success!\n Image uploaded to ${publicUrl}`);
  //   });
  // });
  // blobStream.end();
  // },
  createOrder
);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrder);

module.exports = router;
