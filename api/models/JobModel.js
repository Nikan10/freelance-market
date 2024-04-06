import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: double,
        min: 8,
        required: true,
    },
    status: {
        type: String,
        default: 'open',
        enum: ['open','closed','in progress']
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    offerId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Offer',
        required: true
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true

    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }

},
{
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema);
export default Job;