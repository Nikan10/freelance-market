import express from 'express'

import protect from '../middlewares/protect.js'
import { createSubCategory } from '../controllers/subCategoryController.js'

const subCategoryRouter = express.Router()

subCategoryRouter.post("/create", createSubCategory)

export default subCategoryRouter