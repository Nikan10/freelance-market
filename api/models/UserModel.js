import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'username already exist'],
        maxLength: 32
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    isVarified: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})



const User = mongoose.model('User', userSchema);

export default User;