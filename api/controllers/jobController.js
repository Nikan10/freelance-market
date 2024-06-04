import Job from "../models/JobModel.js"



export const createJob = async (req, res, next) => {

    const jobData = {
        title: req.body.title,
        description: req.body.description,
        budget: req.body.budget,
        sellerLevel: req.body.sellerLevel,
        deliveryTime: req.body.delivery,
        buyer: req.user._id,
        category: req.body.category,
        subCategory: req.body.subCategory
    }

    const newJob = await Job.create(jobData)

    res.status(200).send(newJob)
}

export const getJobs = async (req, res, next) => {
    console.log(req.userId)
    const filters = () => {
        return {
            ...(req.query.status && {status: req.query.status}),
            ...(req.userId && {buyer: req.userId})
        }
    }

    const jobs = await Job.find(filters()).populate('buyer')

    res.status(200).json(jobs)
}

export const getJob = async (req, res, next) => {

    const job = await Job.findById(req.params.jobId).populate('buyer').populate('proposals')

    res.status(200).json(job)
}