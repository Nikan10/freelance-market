import express from 'express'
import { createProposal, getProposal, getProposals, resizeProposalImages, uploadProposalImages } from '../controllers/proposalController.js';
import protect from "../middlewares/protect.js";

const myProposalRouter = express.Router();

myProposalRouter.get('/', protect, getProposals);

export default myProposalRouter;