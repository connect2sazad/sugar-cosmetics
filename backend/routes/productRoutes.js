const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');

const router = express.Router();

// get all products
router.get('/', productController.getAllProducts);

// get single product
router.get('/:id', productController.getProductById);

// create product
router.post('/', auth, productController.createProduct);

// update product
router.put('/:id', auth, productController.updateProduct);

// delete product
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
