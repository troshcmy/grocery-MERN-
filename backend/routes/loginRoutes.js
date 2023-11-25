const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for employees Items
router.post('/', loginController.getSpecificEmployees);
router.get('/protected', authMiddleware, loginController.auth);

// Logout route
router.post('/logout', authMiddleware, loginController.logout);

module.exports = router;
