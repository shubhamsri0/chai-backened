import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

app.use(cors({  // CORS middleware to allow requests from the frontend 
    origin: process.env.CORS_ORIGIN,  // The origin from which the frontend requests will come 
    credentials: true   // Allow credentials to be shared between the frontend and the backend 
}))

app.use(express.json({ limit: "16kb" })) // Body parser middleware to parse JSON body data in requests 
app.use(express.urlencoded({extended: true, limit: "16kb"})) // Body parser middleware to parse URL encoded data in requests 
app.use(express.static("public")) // Serve static files stores in the public directory 

app.use(cookieParser()) // Cookie parser middleware to parse cookies in requests

export { app };