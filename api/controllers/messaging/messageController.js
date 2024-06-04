import Message from "../../models/messaging/messageModel.js";



export const addMessage = async (req, res, next) => {
  const {chat, sender, text} = req.body;
  const message = new Message({
    chat,
    sender,
    text
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json(error);
  }
}

export const getMessages = async (req, res, next) => {
  const { chatId } = req.params;
  try {
    const result = await Message.find({chat: chatId});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error)
  }
}