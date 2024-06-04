import express from 'express'
import { createCommunity, getCommunity } from '../controllers/communityController.js';
import protect from '../middlewares/protect.js';

const communityRouter = express.Router();

communityRouter.post('/create', protect, createCommunity)

communityRouter.get('/', protect, getCommunity)

export default communityRouter;