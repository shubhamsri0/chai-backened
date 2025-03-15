import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {  // Create an async function to connect to the database using mongoose and the environment variables from the .env file
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // Connect to the database using the MONGODB_URI environment variable and the DB_NAME constant from the constants.js file 
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`); // Log a message to the console if the connection is successful 
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        process.exit(1); // Exit process with failure, it will stop the application from running if the database is not connected successfully, it is inbuilt in nodejs. OR  we can use throw new Error("Error connecting to the database: ", error); 
    }
}

export default connectDB;