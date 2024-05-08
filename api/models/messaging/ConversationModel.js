import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({
    conversationId: {
        type: String,
        required: true,
        unique: true,
    },
    lastMessageDate: {
        type: Date,
        required: true,
    },
    messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        required: true
    },
    sellerId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    }],
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    }
},
{
    timestamps: true
})

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;