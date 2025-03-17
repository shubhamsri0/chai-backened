// Purpose: Multer middleware for file upload
// Import multer to handle file uploads in the application
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
  
export const upload = multer({ 
    storage,
})