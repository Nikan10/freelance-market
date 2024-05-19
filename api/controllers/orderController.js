import Gig from "../models/GigModel.js"
import Order from "../models/OrderModel.js"
import User from "../models/UserModel.js";


export const createOrder = async (req, res, next) => {
    
    const gig = await Gig.findById(req.body.gigId)
    if(!gig) return next(new Error('Gig not found'));
    console.log(gig)
    const order = {
        title: gig.title,
        price: gig.price,
        deliveryTime: gig.deliveryTime,
        image: gig.images[0],
        concepts: gig.concepts,
        seller: gig.user,
        buyer: req.user._id,
        gig: gig._id,
    }
    try {
        const newOrder = await Order.create(order)
        res.status(200).json({
            status: "success",
            newOrder
        })
    } catch(error) {
        next(new Error(error.message))
    }
}

export const getOrder = async (req, res, next) => {
    if(req.user.id !== req.userId) return next(new Error('You can not access this order'))
    
    const order = await Order.findById(req.params.orderId).populate('gig').populate('gig').populate('buyer').populate('seller')
    
    if(!order) next(new Error('Order not found'))
    res.status(200).json({
        status: "success",
        order
    })
}

export const getOrders = async (req, res, next) => {
    const userId = req.user._id

    const filters = () => {
        if(req.query.seller === 'true') {
            return {
                ...(req.query.status && {status: req.query.status}),
                ...(req.user._id && {seller: req.user._id})
            }
        }
        return {
            ...(req.query.status && {status: req.query.status}),
            ...(req.user._id && {buyer: req.user._id})
        }
    }

    const orders = await Order.find(filters()).populate('gig').populate('buyer').populate('seller')

    if(!orders) next(new Error('Orders not found'))

    res.status(200).send(orders)
}

// export const getSellerOrders = async (req, res, next) => {
//     const userId = req.user._id
//     console.log("done")
//     if(!req.user.isSeller) return next(new Error("You can not perform this action"))

//     const filters = {
//         ...(req.query.status && {status: req.query.status}),
//         ...(req.user._id && {seller: req.user._id})
//     }

//     const orders = await Order.find({seller: req.user._id})
//     // .populate('gig').populate('buyer').populate('seller')

//     if(!orders) next(new Error('Orders not found'))
    
//     res.status(200).send(orders)
// }

// export const getBuyerOrders = async (req, res, next) => {
//     const userId = req.user._id

//     const filters = {
//         ...(req.query.status && {status: req.query.status}),
//         ...(req.user._id && {buyer: req.user._id})
//     }

//     const orders = await Order.find({buyer: req.user._id})
//     // .populate('gig').populate('buyer').populate('seller')

//     if(!orders) next(new Error('Orders not found'))
    
//     res.status(200).send(orders)
// }

export const updateOrder = async (req, res, next) => {
    
    const order = await Order.findById(req.params.orderId)
    if(!order) next(new Error('Order not found'))

    try {
        order.status = req.body.status

        res.status(200).send(order)
    } catch(error) {
        next(error.message)
    }
}