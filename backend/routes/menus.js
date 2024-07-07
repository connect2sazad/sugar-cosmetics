const express = require('express');
const router = express.Router();
const db = require('../includes/connection');
const { MENUS_QUERY } = require('../includes/queries');

router.get('/', (req, res) => {
    db.query(MENUS_QUERY.all_menus, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports = router;
