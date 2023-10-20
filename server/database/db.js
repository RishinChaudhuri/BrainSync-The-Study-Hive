import mongoose from "mongoose";
import dotenv from "dotenv";
// Since the database is on cloud therefore we have to do error handling in case the server is down or anything.
dotenv.config();//initialising .env
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const Connection = async() =>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dqt0qya.mongodb.net/?retryWrites=true&w=majority`
    
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true});
       console.log("Database connected successfully.");
    }catch(error){
       console.log("Error in connecting to the database",error.message);
    }
}
export default Connection;