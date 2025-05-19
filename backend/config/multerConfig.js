const multer = require('multer');
const path = require('path');
const uploadDir = process.env.UPLOAD_DIR || 'uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'video/mp4'];
  allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Unsupported file type'), false);
};

module.exports = multer({ storage, fileFilter });
