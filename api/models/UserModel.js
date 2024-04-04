import mongoose from "mongoose";

// import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'username already exist'],
        maxLength: 32
    },
    email: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    passwordConfirm: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
},
{
    timestamps: true
})

// buyerSchema.pre('save', async function(next) {
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12)
//     this.passwordConfirm = undefined;
//     next();
// })


const User = mongoose.model('Buyer', userSchema);

export default User;