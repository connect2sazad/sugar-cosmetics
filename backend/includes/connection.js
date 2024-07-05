const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1); // Exit the process with an error code
    }
    console.log('MySQL connected');
});

module.exports = db;
