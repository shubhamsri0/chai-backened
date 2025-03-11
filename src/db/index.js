import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        process.exit(1); // Exit process with failure, it will stop the application from running if the database is not connected successfully, it is inbuilt in nodejs. OR  we can use throw new Error("Error connecting to the database: ", error); 
    }
}

export default connectDB;