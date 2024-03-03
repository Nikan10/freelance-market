import User from '../models/UserModel.js'


export const signup = async (req, res) => {

    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        isSeller: req.body.isSeller
    }

    try{
        const newUser = await User.create(userData);

        
        res.status(200).json({
            status: "success",
            data: newUser
        })
    } catch (error) {
        console.log("Threw Error")
        console.log(error);
    }
}


