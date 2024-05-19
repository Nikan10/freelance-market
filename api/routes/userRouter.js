import express from 'express'

import { getUser } from '../controllers/userController.js';
import manageOrderRouter from './manageOrderRouter.js';
import gigRouter from './gigRouter.js';

const userRouter = express.Router();

userRouter.use('/:id/manageOrders', (req, res, next) => {
    req.userId = req.params.id
    next()
}, manageOrderRouter)
userRouter.use('/:id/gigs', gigRouter)

userRouter.get('/:id', getUser);

export default userRouter;