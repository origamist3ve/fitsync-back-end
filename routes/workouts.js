import express from 'express';
import { Router } from 'express';
import { getWorkouts, getWorkout, createWorkout } from "../controllers/workouts.js";
import verifyToken from "../middleware/verify-token.js";
 
const router = Router();


router.post("/", createWorkout);
router.get("/", getWorkouts);
router.get("/:workoutId", getWorkout);


export default router;