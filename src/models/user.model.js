// Purpose: Define the user model schema and methods to hash password, compare password, generate access token and refresh token.
// The user model schema defines the fields for the user collection in the database.
// The user model schema has a pre-save hook to hash the password before saving it to the database.
// The user model schema has a method to compare the password with the hashed password in the database.

import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"; // Import bcrypt to hash passwords before saving to the database 
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,   // remove whitespace from both ends of a string
            lowercase: true,
            index: true  // index for faster search queries on this field 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,  //cloudinary url
            required: true
        },
        coverImage: {
            type: String,  //cloudinary url
        },
        watchHistory: [  //array of video ids
            {
                type: Schema.Types.ObjectId,  // video id
                ref: "Video"  // video model name
            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]  // custom error message for required field 
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true // automatically add createdAt and updatedAt fields
    }
)

userSchema.pre("save", async function(next) { // pre-save hook to hash password before saving to database 
    if(!this.isModified("password")) return next(); // if password is not modified then skip this step 

    this.password = await bcrypt.hash(this.password, 10) // hash password with bcrypt and salt of 10 rounds 
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) { // method to compare password with hashed password in database
    return await bcrypt.compare(password, this.password)  // compare password with hashed password in database 
}

userSchema.methods.generateAccessToken = function() { // method to generate access token for user 
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {  // method to generate refresh token for user 
    return jwt.sign(  // sign the user data with refresh token secret and expiry time 
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);