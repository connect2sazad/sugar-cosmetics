const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', auth, userController.getAllUsers);

router.post('/upload', auth, upload.single('file'), (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

module.exports = router;
