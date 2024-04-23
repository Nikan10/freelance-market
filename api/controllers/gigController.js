import multer from "multer"
import sharp from "sharp"
import Gig from "../models/GigModel.js";
import Category from "../models/CategoryModel.js";

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new Error("Not an image, please upload images only"), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

export const uploadGigImages = upload.array("images", 3)

export const resizeGigImages = async (req, res, next) => {
    const images = req.files
    if(!images) return next();

    req.body.images = []
    // console.log(req.files[0])
    await Promise.all(
        images.map(async (image, i) => {
            const filename = `gig-${Date.now()}-${i + 1}.jpeg`
            await sharp(image.buffer)
                .resize(1000, 700)
                .toFormat('jpeg')
                .jpeg({quality: 90})
                .toFile(`public/images/gigs/${filename}`)
            req.body.images.push(filename)
        })
    )
    console.log(req.body.images)
    next()
}

export const createGig = async (req, res, next) => {
    try {
        const gig = await Gig.create(req.body)
        // console.log(req.body)
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
export const deleteGig = async (req, res, next) => {
    await Gig.findByIdAndDelete(req.params.gigId)
    res.status(200).json({
        status: "seccess",
        message: "Gig deleted"
    })
}
export const getGig = async (req, res, next) => {
    
    const gig = await Gig.findById(req.params.id).populate('user')
    if(!gig) return console.log(new Error('Gig not found!'));
    res.status(200).json({
        status: 'success',
        gig
    })
}
export const getGigs = async (req, res, next) => {
    const query = req.query
    
    const category = await Category.findOne({name: query.cat})
    
    const filters = {
        // ...(query.userId && { userId: query.userId}),
        ...(category && { category: category._id}),
        ...((query.min || query.max) && {
            price: {
                ...(query.min && { $gte: query.min }),
                ...(query.max && { $lte: query.max })
            }
        }),
        ...(query.search && { title: { $regex: query.search, $options: "i" }})
    }
    try {
        const gigs = await Gig.find(filters).populate('user').populate('category')
        res.status(200).send(gigs)
    } catch(error) {
        return console.log(error);
    }
}