import express from 'express'

import { protect } from '../controllers/authController.js'
import { getAllGigs } from '../controllers/gigController.js'

const gigRouter = express.Router();

gigRouter
    .route('/gigs')
    .get(protect, getAllGigs);

export default gigRouter;