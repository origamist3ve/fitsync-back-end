import express from 'express';
<<<<<<< HEAD
import { Router } from 'express';
import { getWorkouts, getWorkout, createWorkout } from "../controllers/workouts.js";
import verifyToken from "../middleware/verify-token.js";
 
const router = Router();

=======
import {Router} from 'express';
import { getWorkouts, getWorkout } from "../controllers/workouts.js";
// import * as workoutController from '../controllers/workouts';

const router = Router();
>>>>>>> e5b0b5e44b131747ab6082ea0a796636df39cbf8

router.post("/", createWorkout);
router.get("/", getWorkouts);
router.get("/:workoutId", getWorkout);


export default router;