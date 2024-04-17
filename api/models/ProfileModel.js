import mongoose from "mongoose";
const ProfileSchema = mongoose.Schema({

    profileId: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        maxLength: 200
    },
    skills: {
        type: String,
        required: true,
        maxLength: 64
    },
    rating: {
        type: String,
        required: true,
        maxLength: 64
    },
    totalReviews: {
        type: String,
        required: true,
        maxLength: 64
    },
    profileImage: {
        type: Buffer,
        required: true,
        maxLength: 64
    },
    coverImage: {
        type: Buffer,
        required: true
    },
    socialLinks: {
        type: String,
        required: true
    },
    buyerId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Buyer',
        required: true
    },
    sellerId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Seller',
        required: true
    }
},

{
        timestamps: true
})

const Profile = mongoose.model('Profile', ProfileSchema)
export default Profile;

