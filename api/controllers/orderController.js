import Gig from "../models/GigModel"
import Order from "../models/OrderModel"



export const createOrder = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.gigId)

        const newOrder = await Order.create({
            gig: gig._id,
            image: gig.images[0],
            title: gig.title,
            buyer: req.userId,
            seller: gig.user._id,
            price: gig.price,
            paymentIntent: "temporary"
        })

        res.status(200).json({
            status: "success",
        })
    } catch(error) {
        console.log(new Error(error.message))
    }
}