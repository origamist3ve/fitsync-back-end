import Workout from "../models/workout.js";
import User from "../models/user.js";

export const getWorkouts = async (req, res) => {
    try {
        // Verify type of id being used with user
        const workouts = await Workout.find().populate("userId", "username");
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }

};

export const getWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.workoutId).populate("userId", "username");
    
        if (!workout) {
            return res.status(404).json({ err: "Workout not found "});
        }
    res.json(workout);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

export const createWorkout = async (req, res) => {
    try{
        console.log("Sup")
        const userId = req.user._id
        const {workoutType, workout, duration, date} = req.body

        const newWorkout = new Workout({
            user: userId,
            workoutType,
            workout,
            duration,
            date,
        });

        const savedWorkout = await newWorkout.save()
        await User.findByIdAndUpdate(userId, {
            workout: savedWorkout._id,
        })
        res.status(201).json(savedWorkout);
    }
    catch (err) {
        res.status(400).json({ err: err.message });
    }
};

