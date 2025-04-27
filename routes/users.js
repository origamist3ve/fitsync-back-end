import {Router} from 'express';
import * as controllers from '../controllers/users.js';
import verifyToken from "../middleware/verify-token.js";
import injectUserId from "../middleware/injectUserId.js";

const router = Router();

router.get("/", controllers.getUsers);
router.post("/profile", verifyToken, controllers.createProfile)
router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.get("/:userId",verifyToken,injectUserId, controllers.getUser)
router.get("/:userId/workouts",verifyToken, injectUserId,controllers.getUserWorkouts);
router.put("/:userId/workouts/:workoutId", verifyToken, injectUserId, controllers.updateUserWorkout);
router.delete("/:userId/workouts/:workoutId", verifyToken, injectUserId, controllers.deleteUserWorkout);



export default router;