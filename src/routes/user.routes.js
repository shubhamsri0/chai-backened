// Purose: Define the routes for the user model
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const router = Router();

router.route("/register").post(registerUser); // Route to register a new user

export default router;
