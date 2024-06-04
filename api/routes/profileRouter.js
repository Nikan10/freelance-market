import express from 'express'
import { createProfile, resizeUserPhoto, uploadUserPhoto } from '../controllers/profileController.js'
import protect from '../middlewares/protect.js'


const profileRouter = express.Router();

profileRouter.post('/create', protect, uploadUserPhoto, resizeUserPhoto, createProfile)


export default profileRouter