import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";
import dotenv from "dotenv";
// formData converts the file in binary form and since we cannot send the file directly to the database we convert it into chunks with the help of middleware
dotenv.config();//initialising .env
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const storage=GridFsStorage({url:`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dqt0qya.mongodb.net/?retryWrites=true&w=majority`
,options: {useUnifiedTopology: true, useNewUrlParser: true},
file: (req,file)=>{
    const match=["image/png","image/jpg","image/jpeg"];
    if(match.indexOf(file.mimeType)===-1)
       return `${Date.now()}-file-${file.originalname}`;
    return {
        bucketName:'photos',
        filename:`${Date.now()}-file-${file.originalname}`
    };

}
});

export default multer({storage});