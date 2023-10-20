import User from "../model/User.js";

// controller functions

export const addUser = async (request,response) => {
     try{
        let exist=await User.findOne({sub : request.body.sub});// checking whether the user already exists
        if(exist)
        {
            response.status(200).json({msg:"user already exists"});// response body in the form of json
            return ;// no need to make the same user again
        }
        const newUser= new User(request.body);// made a new user based on schema || validated
        await newUser.save();
        response.status(200).json({newUser});
     }catch(error){
         return response.status(500).json(error.message);
     }
};
export const getUsers = async(request,response) =>{
    try{
        const users= await User.find({});// all the data
        return response.status(200).json(users);
    }catch(error){
        return response.status(500).json(error.message);
    }
}