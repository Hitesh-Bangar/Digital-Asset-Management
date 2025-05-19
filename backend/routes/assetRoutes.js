const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { uploadAsset, getAssets, downloadAsset } = require('../controllers/assetController');

router.post('/upload', upload.single('file'), uploadAsset);
router.get('/', getAssets);
router.get('/:id', downloadAsset);

module.exports = router;
