
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ProductRoutes = require('./routes/product.route.js')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the E-commerce Catalog API" });
});

app.use(cors('*'));
app.use('/api', ProductRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});