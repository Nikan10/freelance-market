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
    concepts: {
        type: Number,
    },
    deliveryTime: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gig: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gig',
        // required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        // required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: function() {
            const endDate = new Date(this.startDate);
            endDate.setDate(endDate.getDate() + this.deliveryTime)
            return endDate
        }
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed', 'cancelled'],
        default: "pending"
    },
    paymentIntent: {
        type: String,
        // required: true
    }
},
{
    timestamps: true
})


const Order = mongoose.model('Order', orderSchema)

export default Order