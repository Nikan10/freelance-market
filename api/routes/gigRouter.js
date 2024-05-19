import express from 'express'
import multer from 'multer'
 
import protect from '../middlewares/protect.js'
import permitTo from '../middlewares/permitTo.js'

import { createGig, deleteGig, getGig, getGigs } from '../controllers/gigController.js'
import { resizeGigImages, uploadGigImages } from '../middlewares/gigImagesUpload.js'
import createOrderRouter from './createOrderRouter.js'
import { resizeGigCoverImage, uploadGigCoverImage } from '../middlewares/gigCoverImageUpload.js'

const upload = multer();

const gigRouter = express.Router();

gigRouter.use('/:gigId/orders', createOrderRouter)

gigRouter.post('/create', protect, uploadGigImages, resizeGigImages, createGig)
gigRouter.delete('/:gigId', deleteGig)
gigRouter.get('/:gigId', getGig)
gigRouter.get('/', getGigs)

export default gigRouter;