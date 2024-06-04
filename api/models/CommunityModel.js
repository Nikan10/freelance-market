import mongoose from "mongoose"

const communitySchema = mongoose.Schema({
    buyer: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sellers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
},
{
    timestamps: true
})

const Community = mongoose.model('Community', communitySchema)
export default Community;