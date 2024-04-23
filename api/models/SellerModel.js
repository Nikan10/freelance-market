import mongoose from "mongoose";
import validator from "validator"

import User from "./UserModel";

const sellerProfileSchema = mongoose.Schema({
    bio: {
        type: String,
        minLength: 225,
        maxLength: 1000
    },
    skills: {
        type: [String],
        required: true,
    },
    averageRatings: {
        type: String,
        default: 0
    },
    photo: {
        type: String
    },
    website: {
        type: String,
    },
    socialLinks: {
        type: [String]
    },
    totalReviews: {
        type: [String]
    },
    location: {
        type: String
    }
},
{
    timestamps: true
})


const SellerProfile = mongoose.model('Seller', sellerProfileSchema);

export default SellerProfile;