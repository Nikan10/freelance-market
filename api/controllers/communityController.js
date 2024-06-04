import Communtiy from "../models/CommunityModel.js";

export const createCommunity = async (req, res, next) => {

  const newCommunity = await Communtiy.create({ buyer: req.user._id });

  res.status(200).json(newCommunity);
};

export const getCommunity = async (req, res, next) => {
    
  const community = await Communtiy.findOne({ buyer: req.user._id });

  res.status(200).json(community);
};