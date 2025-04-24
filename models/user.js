import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    workout: [{
        type: Schema.Types.ObjectId,
        ref: "Workout"
    }]
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
})

export default mongoose.model("User", userSchema);