import mongoose from "mongoose";

import Category from "./CategoryModel.js";
import User from "./UserModel.js";

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 64
    },
    description: {
        type: String,
        // required: true,
    },
    reviews: {
        type: [String],
        // required: true
    },
    ratingsAverage: {
        type: Number,
        // required: true,
        max: 5,
        default: 0 
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        // required: true,
        min: 8
    },
    images: {
        type: [String],
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    shortTitle: {
        type: String,
        // required: true,
    },
    shortDescription: {
        type: String,
        // required: true,
    },
    deliveryTime: {
        type: Number,
        // required: true,
    },
    revisions: {
        type: Number,
        // required: true,
    },
    features: {
        type: [String],
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