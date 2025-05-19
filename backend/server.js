const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

try {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
        console.log(`Server running on port ${process.env.PORT}`))
} catch (error) {
    (err => console.error('MongoDB connection error:', err));

}

