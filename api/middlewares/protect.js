import jwt from "jsonwebtoken"
import { promisify } from "util"
import User from '../models/UserModel.js'

const protect = async (req, res, next) => {
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

export default protect;