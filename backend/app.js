const express = require('express');
const cors = require('cors');
const sequelize = require('./models');
const routes = require('./routes'); // Import central routes file
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Use the central routes file
app.use('/api', routes);

const PORT = process.env.PORT || 7777;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
