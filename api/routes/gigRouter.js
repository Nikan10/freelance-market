import express from 'express'
import multer from 'multer'
import protect from '../middlewares/protect.js'
import permitTo from '../middlewares/permitTo.js'

import { createGig, deleteGig, getGig, getGigs, resizeGigImages, uploadGigImages} from '../controllers/gigController.js'

const gigRouter = express.Router();


gigRouter.post('/create', uploadGigImages, resizeGigImages, createGig)
gigRouter.delete('/:id', deleteGig)
gigRouter.get('/:id', getGig)
gigRouter.get('/', getGigs)

export default gigRouter;