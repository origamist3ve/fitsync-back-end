import {Router} from 'express';
import { getWorkouts, getWorkout } from "../controllers/workouts.js";
import * as controllers from '../controllers/workouts.js';
import verifyToken from "../middleware/verify-token.js";
 
const router = Router();




router.post("/",verifyToken, controllers.createWorkout);
router.get("/", controllers.getWorkouts);
router.get("/:workoutId", controllers.getWorkout);


export default router;