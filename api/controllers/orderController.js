import Gig from "../models/GigModel.js"
import Order from "../models/OrderModel.js"
import User from "../models/UserModel.js";


export const createOrder = async (req, res, next) => {
    
    const gig = await Gig.findById(req.body.gigId)
    if(!gig) return next(new Error('Gig not found'));
    
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
        console.log(newOrder)
        res.status(200).json(newOrder)
    } catch(error) {
        next(new Error(error.message))
    }
}

export const getOrder = async (req, res, next) => {
    console.log(req.user.id, req.userId)
    if(req.user.id !== req.userId) return next(new Error('You can not access this order'))
    
    const order = await Order.findById(req.params.orderId).populate('gig').populate('buyer').populate('seller')
    
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
    console.log(filters())
    const orders = await Order.find(filters()).populate('gig').populate('buyer').populate('seller')

    if(!orders) next(new Error('Orders not found'))
    console.log(orders)
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

    try {
        const order = await Order.updateOne({_id: req.params.orderId}, {status: req.body.status})
        if(!order) next(new Error('Order not found'))
        console.log(order)
        res.status(200).json(order)
    } catch(error) {
        next(error.message)
    }
}