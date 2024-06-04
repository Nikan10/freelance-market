import User from "../models/UserModel.js"

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id).populate('profile')

    try {
        res.status(200).json(user)
    } catch(error) {
        console. log(error.message)
    }
}