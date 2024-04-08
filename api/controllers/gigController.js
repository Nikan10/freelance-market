import Gig from "../models/GigModel.js";
import Category from "../models/CategoryModel.js";

export const createGig = async (req, res, next) => {

    try {
        const gig = await Gig.create(req.body)
        console.log(req.body)
        res.status(200).json({
            status: "success",
            data: {
                gig
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
export const getGig = async (req, res, next) => {
    
    const gig = await Gig.findById(req.params.id)
    if(!gig) return console.log(new Error('Gig not found!'));
    res.status(200).json({
        status: 'success',
        data: {
            gig
        }
    })
}
export const getGigs = async (req, res, next) => {
    const query = req.query
    
    const category = await Category.findOne({name: query.cat})

    const filters = {
        ...(category && { categoryId: category._id}),
        ...(query.search && { title: { $regex: query.search }})
    }
    try {
        const gigs = await Gig.find(filters).populate('categoryId')
        res.status(200).send(gigs)
    } catch(error) {
        return console.log(error);
    }
}