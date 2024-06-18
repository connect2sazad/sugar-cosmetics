const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
