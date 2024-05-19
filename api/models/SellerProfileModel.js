import mongoose from "mongoose";
import validator from "validator"

import User from "./UserModel";

const sellerProfileSchema = mongoose.Schema({
    profileTitle: {
        type: String,
        required: true,
        maxLength: 225
    },
    level: {
        type: String,
        required: true,
        default: "new seller",
        enum: ['new seller', 'skilled', 'expert', 'valuable']
    },
    badge: {
        type: [String],
        enum: ['honest', 'accurate', 'trusted']
    },
    workExperience: {
        title: String,
        Company: String,
        Location: String,
        country: String,
        startDate: Date,
        endDate: Date,
        description: {
            type: String,
            maxLength: 1000
        }
    },
    education: {
        school: String,
        degree: String,
        field: String,
        dateAttended: Date,
        graduationYear: Date,
        description: {
            type: String,
            maxLength: 520
        }
    },
    language: [{
        lang: String,
        profeiciency: {
            type: String,
            enum: ['Basic', 'Conversational', 'Fluent', 'Native or Bilingual']
        },
        required: true
    }],
    skills: {
        type: [String],
        required: true,
    },
    photo: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})


const SellerProfile = mongoose.model('Seller', sellerProfileSchema);

export default SellerProfile;