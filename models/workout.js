import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
     workoutType: {
        type: String,
        required: true,
     },
     workout: {
        type: String,
        required: true,
     },
     duration: {
        type: Number,
        required: true,
     },
     date: {
        type: Number,
        required: true,
     },
     
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
     },
     likes: {
        type: Number,
        default: 0,
     }, 
     //comments is a work in progress
     comments: [
        {
            text: String,
            createdAt: {
                type: Date,
                default: Date.now,
            },
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        },
     ],

    },
    {
        timestamps: true,
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
