import Conversation from "../model/Conversation.js";


export const newConversation = async(request,response) =>{
    try{
         const senderId= request.body.senderId;
         const receiverId= request.body.receiverId;

         const exist = await Conversation.findOne({members: {$all:[receiverId,senderId]}});
         if(exist){
             return response.status(200).json("conversation already exists")
             
         }

         const newConversation =new Conversation({
             members:[senderId,receiverId]
         })
          await newConversation.save();
          return response.status(200).json('conversation saved succesfully')
    }catch(error){
           return response.status(500).json(error.message);
    }
}
// $all will check both the senderId and receiverId are matched in the array.
// when a new conversation starts we only overwrite the members and not the messages and timestamps.

export const getConversation = async (request,response) =>{
         const senderId= request.body.senderId;
         const receiverId= request.body.receiverId;
    try{
       let conversation = await Conversation.findOne({members: {$all : [receiverId,senderId]}});
       return response.status(200).json(conversation);
    }catch(error){
         return response.status(500).json(error.message);

    }
}