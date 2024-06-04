import jwt from "jsonwebtoken"
import User from '../models/UserModel.js'

const generateToken = (userId) => {
    const token = jwt.sign({ id: userId}, process.env.JWT_SECRET)
    return token
}

const sendResponse = (user, statusCode, res) => {
    const token = generateToken(user._id)

    res.cookie('token', token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRY_DATE * 24 * 60 * 60 * 1000),

    })

    res.status(statusCode).json({
        status: 'success',
        user
    })
}

export const signup = async (req, res, next) => {

    const UserData = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        isSeller: req.body.isSeller
    }

    try{
        const newUser = await User.create(UserData)

        sendResponse(newUser, 200, res);
    } catch (error) {
        next(error)
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password exists
    if(!email || !password) {
        return next(new Error('Provide email and password'))
    }
    // Check if user exist and passord is correct
    const user = await User.findOne({ email }).select('+password')
    const correct = await user.checkPassword(password, user.password)

    if(!user || !correct) {
        return next(new Error("email or password is incorrect!"))
    }

    sendResponse(user, 200, res);
}

export const logout = (req, res, next) => {
    res.clearCookie("token", {
        sameSite: "none",
        secure: true
    }).status(200).send("You have been logged out")
}