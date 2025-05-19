const Asset = require('../models/Asset');
const path = require('path');

const uploadAsset = async (req, res, next) => {
  try {
    if (!req.file) throw new Error('No file uploaded');

    const { filename, mimetype, size, originalname, path: filePath } = req.file;

    const asset = new Asset({
      filename,
      originalName: originalname,
      type: mimetype,
      size,
      path: filePath,
      tags: req.body.tags?.split(',') || []
    });

    const savedAsset = await asset.save();
    res.status(201).json(savedAsset);
  } catch (err) {
    next(err);
  }
};

const getAssets = async (req, res, next) => {
  try {
    const { type, date, tags } = req.query;
    const filter = {};

    if (type) filter.type = type;
    if (date) filter.uploadDate = { $gte: new Date(date) };
    if (tags) filter.tags = { $in: tags.split(',') };

    const assets = await Asset.find(filter).sort({ uploadDate: -1 });
    res.json(assets);
  } catch (err) {
    next(err);
  }
};

const downloadAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) return res.status(404).json({ message: 'Asset not found' });

    res.download(path.resolve(asset.path), asset.originalName);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadAsset,
  getAssets,
  downloadAsset
};
