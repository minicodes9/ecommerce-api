const express = require('express');

const {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProducts
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/products/', createProduct);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);
router.get('/products/', getProducts); // Get all products with pagination, sorting, and name filtering
module.exports = router;