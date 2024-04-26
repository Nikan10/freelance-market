import mongoose from "mongoose";

import Category from "./CategoryModel.js";
import User from "./UserModel.js";

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true,
        maxLength: 64
    },
    customeTitle: {
        type: String,
        // required: true,
        maxLength: 64
    },
    customeDescription: {
        type: String,
        // required: true,
    },
    summery: {
        type: String,
        // required: true,
    },
    reviews: {
        type: [String],
    },
    ratingsAverage: {
        type: Number,
        max: 5,
        default: 0 
    },
    category: {
        type: String,
        // required: true,
    },
    subCategory: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
        min: 5
    },
    images: {
        type: [String],
    },
    document: {
        type: String,
    },
    user: {
        type: String,
    },
    deliveryTime: {
        type: Number,
        // required: true,
    },
    revisions: {
        type: Number,
        // required: true,
    },
    concepts: {
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