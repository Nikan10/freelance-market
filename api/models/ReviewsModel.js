import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
        unique: true,
    },
    rating: {
        type: double,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },

    reviewDate: {
        type: Date,
        required: true,
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
    }
},

{
    timestamps: true
})

const Review = mongoose.model('Order', OrderSchema)
export default Review;