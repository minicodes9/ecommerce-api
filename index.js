require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app.js');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});