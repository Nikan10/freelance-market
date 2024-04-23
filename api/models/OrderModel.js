import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    gig: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'diputed'],
        default: "pending"
    },
    paymentIntent: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})


const Order = mongoose.model('Order', orderSchema)

export default Order