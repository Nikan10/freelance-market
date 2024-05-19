import mongoose from 'mongoose'

const paymentSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: Number,
        enum: ['Credit Card', 'Debit Card', 'Paypal', 'Stripe', 'Crypto'],
        required: true
    },
    transaction: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    }
},
{
    timestamps: true
})