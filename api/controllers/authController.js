import jwt from "jsonwebtoken"
import User from '../models/UserModel.js'

const generateToken = (userId) => {
    const token = jwt.sign({ id: userId}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_DATE
    })
    return token
}

export const signup = async (req, res) => {

    const UserData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    }

    try{
        const newUser = await User.create(UserData)
        generateToken(newUser._id)

        res.status(200).json({
            status: "success",
            token,
            data: newUser
        })
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
    const currentUser = await Buyer.findOne({ email });
    if(!currentUser || currentUser.password !== password) return new Error('email or password is incorrect!');

    const token = generateToken(currentUser._id)
    
    res.status(200).json({
        token,
        currentUser
    })
}

export const protect = (req, res, next) => {
    let token
    if(req.headers.authorization) token = req.headers.authorization;

    if(!token) {
        return console.log(new Error('You are not logged in'))
    }

    next()
}