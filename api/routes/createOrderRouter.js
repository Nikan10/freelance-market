import express from "express";
import { createOrder } from "../controllers/orderController.js";
import protect from "../middlewares/protect.js";


const createOrderRouter = express.Router();

createOrderRouter.post("/create", protect, createOrder);

export default createOrderRouter;