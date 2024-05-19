import mongoose from "mongoose";

import User from "./UserModel";

const buyerProfileSchema = mongoose.Schema({
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Buyer._id,
        required: true,
    },
    payments: {
        type: String,
    },
    photo: {
        type: String,
    }
},
{
    timestamps: true
})

const BuyerProfile = mongoose.model('BuyerProfile', buyerProfileSchema);

export default BuyerProfile;