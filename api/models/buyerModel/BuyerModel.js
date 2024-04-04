import mongoose from "mongoose";

import User from "../UserModel";

const buyerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'username already exist'],
        maxLength: 32
    },
    lastname: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
    },
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

const Buyer = mongoose.model('BuyerProfile', buyerSchema);

export default Buyer;