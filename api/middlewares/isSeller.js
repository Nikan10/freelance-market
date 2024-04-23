

const isSeller = (req, res, next) => {
    if(req.user === 'seller') {
        next()
    }
    return new Error('Only sellers can create Gig!') 
}

export default permitTo;