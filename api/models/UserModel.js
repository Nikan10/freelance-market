import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs";

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
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate: {
            validator: function(element) {
                return element === this.password
            }
        },
        message: "Passwords are not the same!"

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    passwordChangedAt: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
},
{
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined;
    next();
})

userSchema.methods.checkPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function(JwtTimstamp) {
    if(this.passwordChangedAt) {
        const changeTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
        return JwtTimstamp < changeTimestamp
    }
    return false
}

const User = mongoose.model('User', userSchema);

export default User;