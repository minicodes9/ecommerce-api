const productModel = require('../models/product.model');
const mongoose = require('mongoose');
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Create a new product
const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productModel.create(req.body)
   
    return res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
        next(error);      
    }
};

// Get single product by ID
const getProductById = async (req, res, next) => {
    const { id } = req.params;
  try {
    if(!isValidObjectId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: `Product with ID ${id} not found` });
    }
    return res.status(200).json({
        success: true,
        message: 'Product retrieved successfully',
        data: product
    });
  } catch (error) {
    console.error('Error retrieving product:', error);
        next(error);      
    }
};

// TO Update a product by ID
const updateProductById = async (req, res, next) => {
    const { id } = req.params;
  try {
    if(!isValidObjectId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }
    const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: `Product with ID ${id} not found` });
    }
    return res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
        next(error);      
    }
};

// Delete a product by ID
const deleteProductById = async (req, res, next) => {
    const { id } = req.params;  
    try {
    if(!isValidObjectId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }   
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: `Product with ID ${id} not found` });
    }
    return res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: deletedProduct
    }); 

    } catch (error) {
    console.error('Error deleting product:', error);
        next(error);      
    }
};

module.exports = {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
};