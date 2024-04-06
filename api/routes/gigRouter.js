import express from 'express'

import protect from '../middlewares/protect.js'
import { createGig, deleteGig, getGig, getGigs } from '../controllers/gigController.js'

const gigRouter = express.Router();

gigRouter.post('/create', createGig)
gigRouter.post('/:id', protect, deleteGig)
gigRouter.get('/gig/:id', protect, getGig)
gigRouter.get('/', protect, getGigs)

export default gigRouter;