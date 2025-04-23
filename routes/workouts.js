import {Router} from 'express';
import { getWorkouts, getWorkout } from "../controllers/workouts.js";
import * as controllers from '../controllers/workouts.js';
 
const router = Router();




router.post("/", controllers. createWorkout);
router.get("/", controllers.getWorkouts);
router.get("/:workoutId", controllers.getWorkout);


export default router;