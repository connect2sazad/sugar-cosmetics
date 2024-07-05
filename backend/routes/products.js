const express = require('express');
const router = express.Router();
const db = require('../includes/connection');
const { all_products, PRODUCTS_QUERY } = require('../includes/queries');

router.get('/', (req, res) => {
    db.query(PRODUCTS_QUERY.all_products, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports = router;
