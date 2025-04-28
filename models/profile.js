import mongoose, {Schema} from "mongoose";

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], 
        required: true
    },
    age: {
        type: Number,
        min: 0, 
        required: true
    },
    weight: {
        type: Number,
        min: 0,
        required: true
    },
    height: {
        type: Number, 
        min: 0,
        required: true
    },
    experienceLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'], 
        required: true
    },
});

export default mongoose.model("Profile", profileSchema);