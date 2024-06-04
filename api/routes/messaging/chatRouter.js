import express from 'express'

import { createChat, findChat, userChats } from '../../controllers/messaging/chatController.js';
import protect from '../../middlewares/protect.js';

const chatRouter = express.Router();

chatRouter.post('/', createChat);
chatRouter.get('/:userId', userChats);
chatRouter.get('/find/:firstId/:secondId', findChat);

export default chatRouter;
