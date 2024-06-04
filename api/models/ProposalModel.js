import mongoose, { mongo } from 'mongoose'

const proposalSchema = mongoose.Schema({
    coverLetter: {
        type: String,
        maxLength: 1000,
        required: true
    },
    images: [{
        name: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }],
    link: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    }
},
{
    timestamps: true
})

const Proposal = mongoose.model('Proposal', proposalSchema)

export default Proposal