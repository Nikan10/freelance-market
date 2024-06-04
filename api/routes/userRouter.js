import express from 'express'

import { getUser } from '../controllers/userController.js';
import manageOrderRouter from './manageOrderRouter.js';
import gigRouter from './gigRouter.js';
import jobRouter from './jobRouter.js';
import profileRouter from './profileRouter.js';
import proposalRouter from './proposalRouter.js';
import communityRouter from './communityRouter.js';
import myProposalRouter from './myProposalsRouter.js';

const userRouter = express.Router();

userRouter.use('/:id/manageOrders', (req, res, next) => {
    req.userId = req.params.id
    next()
}, manageOrderRouter)

userRouter.use('/:id/gigs', (req, res, next) => {
    // console.log('user id', req.params.id)
    if(req.params.id === 'all') req.params.id = ''
    req.userId = req.params.id
    next()
}, gigRouter)

userRouter.use('/:id/profile', (req, res, next) => {
    req.userId = req.params.id
    next()
}, profileRouter)

userRouter.use('/:id/jobs', (req, res, next) => {
    if(req.params.id === 'all') req.params.id = ''
    req.userId = req.params.id
    next()
}, jobRouter)

userRouter.use('/:id/community', (req, res, next) => {
    if(req.params.id === 'all') req.params.id = ''
    req.userId = req.params.id
    next()
}, communityRouter)

userRouter.use('/:id/proposals', myProposalRouter)

userRouter.get('/:id', getUser);

export default userRouter;