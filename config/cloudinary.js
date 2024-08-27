import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.v2.config({
  cloud_name: "divau4jlt",
  api_key: "579387995355137",
  api_secret: "PSTYEtr2vidzQUcFLVLc2X4XEtM",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req, file) => {
    let folder = 'default';
    if (file.fieldname === 'image') folder = 'book_images';
    return {
      folder: folder,
      resource_type: 'auto', 
    };
  },
});

const upload = multer({ storage: storage });

export { cloudinary, upload };