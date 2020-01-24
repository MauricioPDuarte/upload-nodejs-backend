const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {

  //Local de armazenamento das imagens.
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    }
  }),

  //Configs de tamanho do arquivo, numero de arquivos e outros.
  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  //Filtrar uploads de arquivos
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};