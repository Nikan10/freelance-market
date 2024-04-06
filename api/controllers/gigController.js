import Gig from "../models/GigModel.js";


export const createGig = (req, res, next) => {

    try {
        const gig = Gig.create(req.body)
        console.log(req.body)
        res.status(200).json({
            status: "success",
            data: {
                req: req.body
            }
        })
    } catch(error) {
        console.log(error.message);
    }
}
export const deleteGig = (req, res, next) => {
    const response = "git all gigs"
    res.status(200).json({
        response
    })
}
export const getGig = (req, res, next) => {
    const response = "git all gigs"
    res.status(200).json({
        response
    })
}
export const getGigs = (req, res, next) => {
    const response = "git all gigs"
    res.status(200).json({
        response
    })
}