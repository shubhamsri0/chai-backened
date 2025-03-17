//Purpose: Define video schema and model
//The video schema defines the fields for the video collection in the database.The video model is a class that represents a video document in the database. The video model has a plugin to add pagination to the video collection. The video model is exported to be used in other parts of the application.
//The video schema has fields for the video file, thumbnail, title, description, duration, views, isPublished, and owner. The video file and thumbnail fields are cloudinary URLs. The title, description, and duration fields are required. The views field is a number that defaults to 0. The isPublished field is a boolean that defaults to true. The owner field is a reference to the User model.The video model has a method to get the video file URL and a method to get the thumbnail URL. The video model is exported to be used in other parts of the application.

import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(  // define video schema 
    {
        videoFile: {
            type: String,  //cloudinary url
            required: true
        },
        thumbnail: {
            type: String,  //cloudinary url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            typw: Number, //cloudinary video duration
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate) // add pagination plugin to video schema 

export const Video = mongoose.model("Video", videoSchema);