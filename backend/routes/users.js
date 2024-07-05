const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../includes/connection');
const { USERS_QUERY } = require('../includes/queries');

router.post('/login', (req, res) => {

    const { email, password } = req.body;

    db.query(USERS_QUERY.login, [email, email], async (err, results) => {

        if (err || results.length === 0) {
            return res.status(403).json({ message: "No such user found" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.EXPIRY });

        res.status(200).json({
            message: 'Authentication successful',
            token,
            username: user.username
        });
    });
});

// router.post('/create', async (req, res) => {

//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     db.execute(USERS_QUERY.create, [username, email, hashedPassword], async (err, results) => {

//         const token = jwt.sign({
//             username : username,
//             email: email
//         },
//         process.env.JWT_SECRET_KEY,
//         {
//             expiresIn: '1h'
//         }
//         );

//         res.status(200).json({
//             message: 'Authentication successful',
//             token,
//             username: username
//         });

//     });
// });

router.post('/create', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(USERS_QUERY.create, [username, email, hashedPassword], (err, results) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error creating user',
                    error: err
                });
            }

            const id = results.insertId;
            const token = jwt.sign(
                {
                    id: id,
                    username: username,
                    email: email
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: process.env.EXPIRY }
            );

            res.status(200).json({
                message: 'User created successfully',
                token,
                id: id,
                username: username
            });
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

module.exports = router;
