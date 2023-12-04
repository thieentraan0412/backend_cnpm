const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  type_file: String,
  status: String,
  uploadDate: { type: Date, default: Date.now },
  data: Buffer,
});

const File = mongoose.model('File', fileSchema);
module.exports = File;