import express from 'express'
import { addMessage, getMessages } from '../../controllers/messaging/messageController.js';


const messageRouter = express.Router();

messageRouter.post("/", addMessage);
messageRouter.get("/:chatId", getMessages);

export default messageRouter;
