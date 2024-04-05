import express from 'express'

import { protect, permitTo } from '../controllers/authController.js'
import { getAllGigs } from '../controllers/gigController.js'

const gigRouter = express.Router();

gigRouter
    .route('/gigs')
    .get(protect, permitTo('admin'), getAllGigs);

export default gigRouter;