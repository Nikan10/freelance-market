import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
    job_id: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {

        type: double,
        minLength: 6,
        required: true,
    },
    status: {
        type: String,
        default: ['open','closed','in progress'],
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    offer_id: [{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        required: true
    }],
    buyer_id: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true

    },
    category_id:{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }

},
{
    timestamps: true
})

const Job = mongoose.model('Job', userSchema);
const Offer = mongoose.model('Offer', offerSchema);
const Buyer = mongoose.model('Buyer', buyerSchema);
const Category = mongoose.model('Category', categorySchema);


 module.exports = {Job, Offer, Buyer, Category};