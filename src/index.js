// require('dotenv').config(path: './env'); OR 
import dotenv from "dotenv"; // Import dotenv to read environment variables from the .env file
dotenv.config({ // Configure dotenv to read environment variables from the .env file in the env directory
    path: "./env"
})
import connectDB from "./db/index.js";

connectDB()  // Connect to the database using the connectDB function imported from the db/index.js file 
.then(() => {   // If the connection is successful then start the server on the specified port
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGODB connection failed !!! ",error);
})










/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";  // Import express
const app = express();   // Create an express app
( async ()=>{
    try {
        await mongoose.connect(`${procss.env.MONGODB_URI}/${DB_NAME}`); // Connect to the database
        app.on("error", (error) =>{  // Handle errors in the app  while connecting to the express
            console.log("Error: ", error)
            throw error;
        })
        app.listen("process.env.PORT" , () => {  // Start the server on the specified port
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {   // Handle errors in the app while connecting to the database
        console.error(error);
        throw(error);
    }

})()
*/