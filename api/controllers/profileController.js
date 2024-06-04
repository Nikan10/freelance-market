import SellerProfile from "../models/ProfileModel.js";
import User from "../models/UserModel.js";
import multer from "multer";
import sharp from "sharp";
import fs from "fs"
import Profile from "../models/ProfileModel.js";

const multerStorage = multer.memoryStorage();

const multerPhotoFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image, please upload image only"), false);
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerPhotoFilter,
});

export const resizeUserPhoto = async (req, res, next) => {
  const photo = req.file;

  if (!photo) return next();

  req.body.photo = "";

  const filename = `user-${Date.now()}-profile.jpeg`;
  await sharp(photo.buffer)
    .resize(600, 600)
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toFile(`public/images/users/${filename}`);
  req.body.photo = filename;

  next();
};

export const uploadUserPhoto = uploadPhoto.single('photo');

export const createProfile = async (req, res, next) => {
  let newProfile;

  const photo = (req.body.photo = {
    name: req.body.coverImage,
    img: {
      data: fs.readFileSync(`public/images/users/${req.body.photo}`),
      contentType: "image/jpeg",
    },
  });

  const data = JSON.parse(req.body.data)
  console.log(data)
  if (req.user.isSeller) {
    const profileData = {
      profileTitle: data.title,
      workExperience: data.experience,
      education: data.education,
      languages: data.languages,
      skills: data.skills,
      photo: photo,
      country: data.country,
      city: data.city,
      postalCode: data.postalCode,
      phone: data.phone,
    };

    const newProfile = await Profile.create(profileData);
    await User.updateOne({_id: req.user._id}, {$set: { profile: newProfile._id }});
  }

  res.status(200).json({
    status: "success",
    newProfile,
  });
};

// export const getSellerProfile = (req, res, next) => {
//   const profile = SellerProfile.findById(req.user._id);

//   res.status(200).json({
//     status: "success",
//     profile,
//   });
// };

// export const createBuyerProfile = (req, res, next) => {
//   const profileData = {
//     photo: req.body.photo,
//     country: req.body.country,
//     city: req.body.city,
//     postalCode: req.body.postalCode,
//     phone: req.body.phone,
//   };

//   const newProfile = BuyerProfile.create(profileData);

//   res.status(200).json({
//     status: "success",
//     newProfile,
//   });
// };
