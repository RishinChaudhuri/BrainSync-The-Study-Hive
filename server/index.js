import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
//connections
import Connection from './database/db.js';
import route from "./routes/route.js";

const app=express(); //initialise the express
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));// to handle the spaces in url .
app.use('/',route);// Mount the subroute on the root path In this setup, 
//any requests that match the root path '/' will be directed to the subroutes defined in the route.js file. 
Connection();

const PORT= 8000;
app.listen(PORT,() => console.log(`server is running successfully on port ${PORT}`));