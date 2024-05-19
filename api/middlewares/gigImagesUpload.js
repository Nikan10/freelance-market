import multer from "multer";
import sharp from "sharp";

const multerStorage = multer.memoryStorage();

const multerImagesFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image, please upload images only"), false);
  }
};

const uploadImages = multer({
  storage: multerStorage,
  fileFilter: multerImagesFilter,
});

export const resizeGigImages = async (req, res, next) => {
    
  const { images, coverImage } = req.files;

  if (!images || !coverImage) return next();

  req.body.images = [];
  req.body.coverImage = "";

  const coverFilename = `gig-${Date.now()}-cover.jpeg`;
  await sharp(coverImage[0].buffer)
    .resize(1000, 640)
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toFile(`public/images/gigs/${coverFilename}`);
  req.body.coverImage = coverFilename;

  await Promise.all(
    images.map(async (image, i) => {
      const filename = `gig-${Date.now()}-${i + 1}.jpeg`;
      await sharp(image.buffer)
        .resize(1000, 640)
        .toFormat("jpeg")
        .jpeg({ quality: 60 })
        .toFile(`public/images/gigs/${filename}`);
      req.body.images.push(filename);
    })
  );

  next();
};

export const uploadGigImages = uploadImages.fields([
    { name: 'images', maxCount: 3},
    { name: 'coverImage', maxCount: 1}
]);
