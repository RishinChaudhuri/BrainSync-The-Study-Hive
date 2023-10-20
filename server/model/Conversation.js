import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    members :{
        type:Array
    },
    message:{
        type:String
    }},
    {
       timestamps:true
    }
)
const conversation = mongoose.model('Conversation',ConversationSchema);
// timestamps will automatically generate the time at which the conversation schema was hit

export default conversation;