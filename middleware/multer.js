const multer = require("multer");


const storage =  multer.memoryStorage()



const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}



const upload = multer({ storage,limits:{fileSize:3000000, files: 1} });

module.exports = upload