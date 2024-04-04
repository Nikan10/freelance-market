import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'username already exist'],
        maxLength: 32
    },
    descriptions: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
    }
},
{
    timestamps: true
})


const Gig = mongoose.model('Gig', gigSchema);

export default Gig;