import {Router} from 'express';
import * as controllers from '../controllers/workouts.js';
import verifyToken from "../middleware/verify-token.js";
 
const router = Router();

router.get("/",controllers.getWorkouts);
router.get("/:workoutId", controllers.getWorkout);
router.post("/",verifyToken, controllers.createWorkout);
router.put("/:workoutId",verifyToken, controllers.updateWorkout)
router.delete("/:workoutId",verifyToken, controllers.deleteWorkout)




export default router;