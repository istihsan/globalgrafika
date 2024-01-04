require('dotenv').config()
const express = require("express");
const db = require("./db/index");
const Product = require("./models/productModel");
const productRoutes = require('./routes/products');
const app = express();
const cors = require("cors");

app.use(express.json())

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/products', productRoutes)


app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});


// app.get("/products", async (req, res) => {
//   console.log('GET Products')
//   try {
//     const products = await Product.findOne({name:'bismo'});
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get('/products/:id', async (req,res) =>{
//   try{
//     const products = await Product.findById(req.params.id);
//     res.json(products);
//   }
//   catch(error){
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error"});
//   }
// })

// app.post('/products', async(req,res) =>{
//   console.log(req.body,">>>>>>>>>>>>>>>>>>")
//   try{
//     await Product.create({title: req.body.title, description: req.body.description, price: req.body.price, stock: req.body.stock})
//     res.json({})
//   }
//   catch(error){
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error"});
//   }
// })

