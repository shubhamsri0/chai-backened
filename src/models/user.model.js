import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";;
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
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) { // method to compare password with hashed password in database
    return await bcrypt.compare(password, this.password)
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
    return jwt.sign(
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