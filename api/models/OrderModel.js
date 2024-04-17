import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: double,
        minLength: 6,
        required: true,
    },
    status: {
        type: String,
        default: ['submitted', 'accepted', 'declined'],
    },

    datePlaced: {
        type: Date,
        required: true,
    },

    dateCompleted: {
        type: Date,
        required: true,
    },

    paymentStatus: {
        type: Date,
        default: ['paid', 'unpaid'],
    },

    gigId: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gig',
        required: true
    }],

    buyerId: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Buyer',
        required: true
    },

    reviewId: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Review',
        required: true
    },
    offerId: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Offer',
        required: true
    }
},

{
    timestamps: true
})

const Order = mongoose.model('Order', OrderSchema)
export default Order;