import express from 'express'
import { createSellerProfile } from '../controllers/profileController';


const sellerProfileRouter = express.Router();

sellerProfileRouter.post('/create', createSellerProfile)