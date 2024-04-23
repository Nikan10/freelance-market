import express from 'express'



const router = express.Router()

router.post("/:gigId", createOrder)
router.get("/", getOrders)

export default router