import mongoose from 'mongoose'

const messageSchema = mongoose.Schema(
  {
    chat: {
      type: mongoose.Types.ObjectId,
      ref: 'Chat'
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
