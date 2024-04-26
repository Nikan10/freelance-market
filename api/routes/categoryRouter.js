import express from 'express'

import { createCategory, deleteCategory, getCategory, getCategories } from '../controllers/categoryController.js';

const categoryRouter = express.Router();


categoryRouter.post('/add', createCategory)
categoryRouter.delete('/:id', deleteCategory)
categoryRouter.get('/:id', getCategory)
categoryRouter.get('/', getCategories)

export default categoryRouter;