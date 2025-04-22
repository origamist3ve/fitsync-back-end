import express from 'express';
import Workout from "../models/workout.js";
// import * as workoutController from '../controllers/workouts';

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const workouts =await Workout.find().populate("userId","username");
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch workouts", error: err});
    }
});

router.get("/:workoutId", async (req,res) => {
    const { workoutId } = req.params;
    try{
        const workout = await Workout.findById(workoutId).populate("userId", "username");
        if (!workout) {
            return res.status(404).json({message: "Workout not found"});
        }
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch workout", error: err });
    }
});

export default router;