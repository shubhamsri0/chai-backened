// require('dotenv').config(path: './env'); OR 
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
})
import connectDB from "./db/index.js";

connectDB()











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