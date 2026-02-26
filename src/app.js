const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(logger);

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the E-commerce Catalog API" });
});

app.use(errorHandler);

module.exports = app;