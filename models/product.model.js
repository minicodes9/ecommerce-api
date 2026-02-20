const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true, index: true, trim: true, minLength: 1, maxLength: 255
    },
    price: {
        type: Number, required: true, min: 0
    },
    description: {
        type: String, required: false, trim: true, minLength: 10, maxLength: 1000
    },
    category: {
         type: String, required: true, trim: true, minLength: 1, maxLength: 100
    },
     inStock: {
    type: Boolean, default: true
  }
}, 
{timestamps: true});

// Create a text index for full-text search
productSchema.index({ name: 'text', description: 'text'});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;