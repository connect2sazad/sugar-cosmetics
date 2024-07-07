const express = require('express');
const router = express.Router();
const users = require('./users');
const products = require('./products');
const menus = require('./menus');
const wishlist = require('./whishlist');
const cart = require('./cart');

router.use('/users', users);
router.use('/products', products);
router.use('/menus', menus);
router.use('/wishlist', wishlist);
router.use('/cart', cart);

module.exports = router; // Export the router
