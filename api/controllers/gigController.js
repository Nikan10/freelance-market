import mongoose from "mongoose";
import Gig from "../models/GigModel.js";
import fs from "fs";

export const createGig = async (req, res, next) => {
  
  let { data } = req.body
  data = JSON.parse(data)

  const images = req.body.images.map((image) => ({
    name: image,
    img: {
      data: fs.readFileSync(`public/images/gigs/${image}`),
      contentType: "image/jpeg",
    },
  }));
  
  const coverImage = (req.body.coverImage = {
    name: req.body.coverImage,
    img: {
      data: fs.readFileSync(`public/images/gigs/${req.body.coverImage}`),
      contentType: "image/jpeg",
    },
  });

  const gigData = {
    title: data.title,
    customeTitle: data.customeTitle,
    customeDescription: data.customeDescription,
    deliveryTime: data.delivery,
    concepts: data.concepts,
    category: data.category,
    subCategory: data.subCategory,
    attributes: data.attributesList,
    options: data.optionsList,
    coverImage: coverImage,
    images: images,
    summery: data.summery,
    price: data.totalPrice,
    user: req.user._id,
    faqs: data.faqs,
    simultaneousProjects: data.projectsNumber,
  };

  try {
    const newGig = await Gig.create(gigData);

    res.status(200).json({
      status: "success",
      newGig,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteGig = async (req, res, next) => {
  await Gig.findByIdAndDelete(req.params.gigId);
  res.status(200).json({
    status: "seccess",
    message: "Gig deleted",
  });
};
export const getGig = async (req, res, next) => {
  const gig = await Gig.findById(req.params.gigId).populate("user");
  if (!gig) return next(new Error("Gig not found!"));
  res.status(200).json(gig);
};
export const getGigs = async (req, res, next) => {
  const query = req.query;
  console.log('user id', req.userId)
  const filters = {
    ...(req.userId && { user: new mongoose.Types.ObjectId(req.userId) }),
    ...(query.subCategory && { subCategory: query.subCategory }),
    ...(query.delivery && { deliveryTime: query.delivery }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gte: query.min }),
        ...(query.max && { $lte: query.max }),
      },
    }),
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    
    const gigs = await Gig.find(filters).populate("user").populate("category");

    res.status(200).json(gigs);
  } catch (error) {
    return next(new Error(error))
  }
};
