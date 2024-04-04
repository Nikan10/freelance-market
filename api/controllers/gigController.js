import Gig from "../models/GigModel.js";

export const getAllGigs = (req, res, next) => {
    const response = "git all gigs"
    res.status(200).json({
        response
    })
}