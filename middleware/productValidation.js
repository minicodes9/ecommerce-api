const Joi = require('joi');

// Validation schema for product creation and update
const productjoiSchema = Joi.object({
    name: Joi.string().trim().min(1).max(255).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().trim().min(10).max(1000).optional(),
    category: Joi.string().trim().min(1).max(100).required(),
    inStock: Joi.boolean().optional()
}).options({abortEarly: false, allowUnknown: false}); // Do not abort early and do not allow unknown fields

// Middleware for validating product data
const validateProduct = (req, res, next) => {
    const { error } = productjoiSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Validation error",  
            details: error.details.map(err => err.message) });
    }   
    next(); // Continue to the next middleware or route handler if validation is successful
};

module.exports = validateProduct;

