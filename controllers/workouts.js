import Workout from "../models/workout.js";

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
        const newWorkout = await Workout.create({
            workoutType: req.body.workoutType,
            workout: req.body.workout,
            duration: req.body.duration,
            date: req.body.date,
            // userId: req.user._id,
        });
        newWorkout.save()
        res.status(201).json(newWorkout);
    } catch (err) {

        res.status(400).json({ err: err.message });
    }
};

