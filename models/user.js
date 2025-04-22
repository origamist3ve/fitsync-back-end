import mongoose, {Schema} from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        min: 0,
        required: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "profile",
        required: true,
    },
    workout: {
        type: Schema.Types.ObjectId,
        ref: "workout",
        required: true,
    }
});

export default mongoose.model("pets", petSchema);