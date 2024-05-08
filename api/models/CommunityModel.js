import mongoose from "mongoose";

const CommunitySchema = mongoose.Schema({
    communityId: {
        type: String,
        required: true,
        unique: true,
    },
    buyer_id: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true

    },
    seller_id:{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    }

},
{
    timestamps: true
})

const Community = mongoose.model('Community', CommunitySchema);
export default Community;