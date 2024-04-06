import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 64
    },
    description: {
        type: String,
        required: true,
    },
    reviews: {
        type: [String],
        ref: 'Reviews'
    },
    ratingsAverage: {
        type: Number,
        required: true,
        max: 5,
        default: 0 
    },
    categoryId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 8
    },
    images: {
        type: [String],
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revisions: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: false
    },
    sales: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
})


const Gig = mongoose.model('Gig', gigSchema);

export default Gig;