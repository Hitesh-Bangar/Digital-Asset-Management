const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  type: String,
  size: Number,
  path: String,
  uploadDate: {
    type: Date,
    default: Date.now
  },
  tags: [String]
});

module.exports = mongoose.model('Asset', assetSchema);
