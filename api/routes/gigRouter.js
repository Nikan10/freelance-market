import express from 'express'

import protect from '../middlewares/protect.js'
import { createGig, deleteGig, getGig, getGigs } from '../controllers/gigController.js'

const gigRouter = express.Router();

gigRouter.post('/create', createGig)
gigRouter.post('/:id', deleteGig)
gigRouter.get('/:id', getGig)
gigRouter.get('/', getGigs)

export default gigRouter;