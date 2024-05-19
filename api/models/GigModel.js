import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true,
        maxLength: 64
    },
    customeTitle: {
        type: String,
        // required: true,
        maxLength: 64
    },
    customeDescription: {
        type: String,
        // required: true,
    },
    summery: {
        type: String,
        // required: true,
    },
    reviews: {
        type: [String],
    },
    ratingsAverage: {
        type: Number,
        max: 5,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    attributes: [{
        name: {
            type: String
        },
        value: {
            type: String
        }
    }],
    options: [{
        name: String,
        status: {
            type: String,
            default: false
        }
    }],
    price: {
        type: Number,
        // required: true,
        min: 5
    },
    coverImage: {
        name: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },
    images: [{
        name: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }],
    document: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.Object,
        ref: 'User',
        required: true
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    concepts: {
        type: Number,
        // required: true,
    },
    faqs: [{
        question: String,
        answer: String
    }],
    simultaneousProjects: {
        type: Number,
        required: true
    },
    sales: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
})


const Gig = mongoose.model('Gig', gigSchema);

export default Gig;