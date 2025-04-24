import {Router} from 'express';
import * as controllers from '../controllers/users.js';
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", controllers.getUsers);
router.post("/profile", verifyToken, controllers.createProfile)
router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.get("/:userId",verifyToken, controllers.getUser)
router.get("/:userId/workouts", verifyToken, controllers.getUserWorkouts);



export default router;