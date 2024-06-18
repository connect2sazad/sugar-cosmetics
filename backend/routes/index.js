const express = require('express');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const router = express.Router();

// Use individual route modules
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
