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

export const signin = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password exists
    if(!email || !password) {
        return new Error('Provide email and password');
    }
    // Check if user exist and passord is correct
    const currentUser = await User.findOne({ email });
    if(!currentUser || currentUser.password !== password) return new Error('email or password is incorrect!');

    const token = 's2drty3uefyvhoik3jejfvdfoxn3897r30idjhuchw89g7h';
    console.log(token)
    res.status(200).json({
        currentUser,
        token
    })
}