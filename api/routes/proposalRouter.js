import express from 'express'
import { createProposal, getProposal, getProposals, resizeProposalImages, uploadProposalImages } from '../controllers/proposalController.js';
import protect from "../middlewares/protect.js";

const proposalRouter = express.Router();

proposalRouter.post('/create', protect, uploadProposalImages, resizeProposalImages, createProposal);
proposalRouter.get('/', protect, getProposals);
proposalRouter.get('/:proposalId', protect, getProposal);

export default proposalRouter;