

const permitTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return console.log(new Error("You are not permitted to perform this action"))
        }
        next()
    }
}

export default permitTo;