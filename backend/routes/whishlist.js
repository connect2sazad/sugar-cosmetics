const express = require('express');
const router = express.Router();
const db = require('../includes/connection');
const { WISHLIST_QUERY } = require('../includes/queries');

router.get('/add', (req, res) => {

    const { user_id, product_id } = req.body;

    db.query(WISHLIST_QUERY.add, [user_id, product_id], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.get('/remove', (req, res) => {

    const { id } = req.body;

    db.query(WISHLIST_QUERY.remove, [id], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports = router;
