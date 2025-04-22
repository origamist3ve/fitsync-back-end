import {Router} from 'express';
import * as controllers from '../controllers/users.js';
import {getUser} from "../controllers/users.js";

const router = Router();

router.get("/", controllers.getUsers);
router.get("/:userId", controllers.getUser)

export default router;