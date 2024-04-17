import mongoose from "mongoose";

const OfferSchema = mongoose.Schema({
    offerId: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: double,
        minLength: 6,
        required: true,
    },
    status: {
        type: String,
        default: ['submitted', 'accepted', 'declined'],
    },
    submissionDate: {
        type: Date,
        required: true,
    },
    jobId: [{

        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required: true
    }],
    sellerId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Seller',
        required: true
    },
    categoryId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category',
        required: true
    },
    orderId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Order',
        required: true
    }
},
{
    timestamps: true
})
const Offer = mongoose.model('Offer', OfferSchema);
export default Offer;
