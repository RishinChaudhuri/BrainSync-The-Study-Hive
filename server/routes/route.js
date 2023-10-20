import express from "express";
import {addUser,getUsers} from "../controller/user-controller.js"
import { newConversation,getConversation} from "../controller/conversation-controller.js";
import { newMessage,getMessages } from "../controller/message-controller.js";
import { uploadFile ,getImage} from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post('/add',addUser);// here addUser is the controller function from the api|| from the api we get a request(which contains its header body params) and then the backend has to send the response back to the api
// this is the route that gets hits as its url mathes to the endpoint where the api sends a request.
route.get('/users',getUsers);

route.post('/conversation/add', newConversation);
// for starting a new conversation between two when chatbox is opened
route.post('/conversation/get', getConversation);
// getting all the previous chats from the database getConversation is the api here.
route.post('/message/add', newMessage);
// getting the message typed by the user and storing in the database.
route.get('/message/get/:id',getMessages);
// getting message as per conversation id passed as param
route.post('/file/upload',upload.single("file"), uploadFile);
// for uploading the file onto database
route.get('/file/:filename',getImage);
export default route;