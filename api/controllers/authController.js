import jwt from "jsonwebtoken"
import { promisify } from "util"
import User from '../models/UserModel.js'

const generateToken = (userId) => {
    const token = jwt.sign({ id: userId}, process.env.JWT_SECRET)
    return token
}

const sendResponse = (user, statusCode, res) => {
    const token = generateToken(user._id)

    res.cookie('token', token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRY_DATE * 24 * 60 * 60 * 1000),
        secure: true,
        httpOnly: true
    })

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    })
}

export const signup = async (req, res) => {

    const UserData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role,
        passwordChangedAt: req.body.passwordChangedAt
    }

    try{
        const newUser = await User.create(UserData)

        sendResponse(user, 200, res);
    } catch (error) {
        console.log("Threw Error")
        console.log(error);
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password exists
    if(!email || !password) {
        return new Error('Provide email and password');
    }
    // Check if user exist and passord is correct
    const user = await User.findOne({ email }).select('+password')
    const correct = await user.checkPassword(password, user.password)

    if(!user || !correct) {
        return console.log(new Error("email or password is incorrect!"))
    }

    sendResponse(user, 200, res);
}

export const protect = async (req, res, next) => {
    let token
    if(req.headers.authorization) token = req.headers.authorization;

    if(!token) {
        return console.log(new Error('You are not logged in'))
    }
    const decodeToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    
    const currentUser = await User.findById(decodeToken.id)
    if(!currentUser) return console.log(new Error("This user no longer exist"))

    if(currentUser.changedPasswordAfter(decodeToken.iat)) return console.log("Your password recently changed, please log in again")

    req.user = currentUser;
    next()
}

export const permitTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return console.log(new Error("You are not permitted to perform this action"))
        }
        next()
    }
}