const express = require('express');
const router = express.Router();
const db = require('../includes/connection');
const { CART_QUERY } = require('../includes/queries');

router.get('/add', (req, res) => {
    db.query(CART_QUERY.add, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports = router;
