import {Router} from 'express';
import * as controllers from '../controllers/users.js';
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", controllers.getUsers);
router.post("/sign-up",controllers.signUp)
router.post("/sign-in",controllers.signIn)
router.get("/:userId", controllers.getUser)



export default router;