const express = require('express');
const router = express.Router();
const {createProduct, getOneProduct, getAllProduct, deleteProduct, updateProduct} = require('../controllers/productController')


router.get('/', getAllProduct)
router.get('/:id', getOneProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)


module.exports = router;