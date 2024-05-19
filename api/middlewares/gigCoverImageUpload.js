import multer from "multer";
import sharp from "sharp";

const multerStorage = multer.memoryStorage();

const multerCoverImageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image, please upload image only"), false);
  }
};

const uploadCoverImage = multer({
  storage: multerStorage,
  fileFilter: multerCoverImageFilter,
});

export const resizeGigCoverImage = async (req, res, next) => {
  console.log(req.file)
  const {coverImage} = req.file;
  
  if (!coverImage) return next();

  req.body.coverImage = [];

  const filename = `gig-${Date.now()}-cover.jpeg`;
  await sharp(coverImage.buffer)
    .resize(1000, 640)
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toFile(`public/images/gigs/${filename}`);
  req.body.coverImage.push(filename);
  next();
};

export const uploadGigCoverImage = uploadCoverImage.single("coverImage");
