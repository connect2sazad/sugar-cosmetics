const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});

module.exports = {
    app
};