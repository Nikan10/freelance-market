import express from 'express'

import { getOrder, getOrders, updateOrder } from '../controllers/orderController.js'
import protect from '../middlewares/protect.js'

const manageOrderRouter = express.Router()

manageOrderRouter.get("/:orderId", protect, getOrder)
manageOrderRouter.get("/", protect, getOrders)
manageOrderRouter.patch("/:orderId/update", updateOrder)

export default manageOrderRouter