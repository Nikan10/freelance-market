import express from "express";
import { createJob, getJob, getJobs } from "../controllers/jobController.js";
import protect from "../middlewares/protect.js";
import proposalRouter from "./proposalRouter.js";


const jobRouter = express.Router();

jobRouter.use('/:jobId/proposals',(req, res, next) => {
    req.jobId = req.params.jobId
    next()
}, proposalRouter)

jobRouter.post('/create', protect, createJob)
jobRouter.get('/', protect, getJobs)
jobRouter.get('/:jobId', getJob)

export default jobRouter;