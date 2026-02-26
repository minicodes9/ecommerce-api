const express = require('express');
const router = express.Router();
const validateProduct = require('../middlewares/productValidation.js');
const {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProducts
} = require('../controllers/product.controller.js');

router.post('/', validateProduct, createProduct);
router.get('/:id', getProductById);
router.get('/', getProducts);
router.put('/:id', validateProduct, updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;
