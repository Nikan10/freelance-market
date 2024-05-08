import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    messageId: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    messageType: [{

        type: Buffer,
        required: true,
    }],
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
   sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },

},
{
    timestamps: true
})

const Message = mongoose.model('Message', MessageSchema);

 export default Message;