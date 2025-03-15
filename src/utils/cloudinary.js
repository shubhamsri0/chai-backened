// Exporting a function to upload file on cloudinary and return the url of file 
import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'


cloudinary.config({   // cloudinary configuration 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localPath) => {  // function to upload file on cloudinary 
    try {
        if(!localPath) return null;  // if path is not provided then return null
        // Upload file on cloudinary
        const response = await cloudinary.uploader.upload(localPath, {  // upload file on cloudinary 
            resource_type: "auto"  // resource type is auto 
        })
        // File uploaded successfully
        console.log("File is upload on cloudinary",response.url)  // log the url of file 
        return response;  
    } catch (error) { // if error occurs then catch block will run 
        fs.unlinkSync(localPath) // Remove the locally saved temporary file as the upload  operation got failed
        return null;
    }
}

export { uploadOnCloudinary }