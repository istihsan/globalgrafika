const express = require('express');
const router = express.Router();
const {createProduct, getOneProduct, getAllProduct, deleteProduct, updateProduct} = require('../controllers/productController')


router.get('/', getAllProduct)
router.get('/:id', getOneProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)


module.exports = router;


// router.delete('/:id', async (req,res) =>{
//   try{
//     const products = await Product.findById(req.params.id);
//     res.json(products);
//   }
//   catch(error){
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error"});
//   }
// })
// router.post('/', async (req, res) => {
//   try {
//     const { name, description, price } = req.body;
//     const product = new Product({ name, description, price });
//     const savedProduct = await product.save();
//     res.json(savedProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

