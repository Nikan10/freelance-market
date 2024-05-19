import Job from "../models/JobModel"




export const createJob = async (req, res, next) => {

    const jobData = {
        title: req.body.title,
        description: req.body.description,
        budget: req.body.budget,
        sellerLevel: req.body.sellerLevel,
        deliveryTime: req.body.deliveryTime,
        status: req.body.status,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        proposal: req.body.proposal,
        buyer: req.body.buyer,
        category: req.body.category,
        subCategory: req.body.subCategory
    }

    const newJob = await Job.create(jobData)

    res.status(200).send(newJob)
}

export const getJobs = async (req, res, next) => {

    const jobs = await Job.find();

    res.status(200).send(jobs)
}