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
        enum: ['open','closed']
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    proposal: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Offer',
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true
    }
},
{
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema);
export default Job;