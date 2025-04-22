import express from 'express';
import {Router} from 'express';
import { getWorkouts, getWorkout } from "../controllers/workouts.js";
// import * as workoutController from '../controllers/workouts';

const router = Router();

router.get("/", getWorkouts);

router.get("/:workoutId", getWorkout);

export default router;