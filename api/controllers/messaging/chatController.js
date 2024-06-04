import Chat from "../../models/messaging/chatModel.js"



export const createChat = async (req, res, next) => {
  const newChat = new Chat({
    members: [req.body.sender, req.body.reciever]
  })

  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const userChats = async (req, res, next) => {
  try {
    const chat = await Chat.find({
      members: {$in: [req.params.userId]}
    })
    res.status(200).json(chat)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const findChat = async (req, res, next) => {
  try {
    
    const chat = await Chat.findOne({
      members: {$all: [req.params.firstId, req.params.secondId]}
    })
    console.log('recieved')
    res.status(200).json(chat)
  } catch (error) {
    res.status(200).json(error)
  }
}