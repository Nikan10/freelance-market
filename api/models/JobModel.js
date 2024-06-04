import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        min: 8,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    sellerLevel: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'open',
        enum: ['open','closed']
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
            endDate.setDate(endDate.getDate() + 7)
            return endDate
        }
    },
    proposals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Proposal',
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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