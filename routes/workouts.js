import { Router } from 'express';
import { getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout, } from "../controllers/workouts.js";
import verifyToken from "../middleware/verify-token.js";
 
const router = Router();

router.get("/", getWorkouts);
router.get("/:workoutId", getWorkout);
router.post("/", createWorkout);
router.put("/:workoutId", verifyToken, updateWorkout);
router.delete("/:workoutId", verifyToken, deleteWorkout);



export default router;