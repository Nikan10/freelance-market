import multer from "multer";
import sharp from "sharp";
import fs from "fs";
import Proposal from "../models/ProposalModel.js"
import Job from "../models/JobModel.js";

const multerStorage = multer.memoryStorage();

const multerImagesFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not images, please upload images only"), false);
  }
};

const uploadImages = multer({
  storage: multerStorage,
  fileFilter: multerImagesFilter,
});

export const resizeProposalImages = async (req, res, next) => {

  const images = req.files;

  if (!images) return next();

  req.body.images = [];

  await Promise.all(
    images.map(async (image, i) => {
      const filename = `proposal-${Date.now()}-${i + 1}.jpeg`;
      await sharp(image.buffer)
        .resize(1000, 640)
        .toFormat("jpeg")
        .jpeg({ quality: 60 })
        .toFile(`public/images/proposals/${filename}`);
      req.body.images.push(filename);
    })
  );

  next();
};

export const uploadProposalImages = uploadImages.array('images', 6);

export const createProposal = async (req, res, next) => {

  const images = req.body.images.map((image) => ({
    name: image,
    img: {
      data: fs.readFileSync(`public/images/proposals/${image}`),
      contentType: "image/jpeg",
    },
  }));

  const proposalData = {
    coverLetter: req.body.coverLetter,
    images: images,
    link: req.body.link,
    job: req.jobId,
    user: req.user._id,
  };

  const newProposal = await Proposal.create(proposalData);
  const job = await Job.findById(req.jobId);
  let proposals = job.proposals
  proposals.push(newProposal._id)
  await Job.updateOne({_id: req.body.jobId}, {$set: { proposals: proposals }});

  res.status(200).json(newProposal);
};

export const getProposals = async (req, res, next) => {

  const filters = {
    ...(req.userId && { user: new mongoose.Types.ObjectId(req.userId) }),
    ...(req.params.jobId && { job: req.params.jobId }),
  };

  const proposals = await Proposal.find(filters);

  res.status(200).json(proposals);
};

export const getProposal = async (req, res, next) => {
  const proposal = await Proposal.findById(req.params.proposalId);

  res.status(200).json(proposal);
};