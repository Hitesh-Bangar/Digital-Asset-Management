const express = require('express');
const cors = require('cors');
const path = require('path');
const assetRoutes = require('./routes/assetRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/assets', assetRoutes);
app.use(errorHandler);

module.exports = app;
