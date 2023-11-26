// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for Products
router.get('/',authMiddleware, productController.getAllProducts);
router.get('/:id',authMiddleware, productController.getProductById);
router.post('/',authMiddleware, productController.createProduct);
router.put('/:id',authMiddleware, productController.updateProduct);
router.patch('/:id',authMiddleware, productController.patchProduct);
router.delete('/:id',authMiddleware, productController.deleteProduct);

module.exports = router;
