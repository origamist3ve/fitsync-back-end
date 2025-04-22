import { Router } from "express";
import profilesRouter from "./profiles.js";
import usersRouter from "./users.js";
import workoutsRouter from "./workouts.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("This is the api root!");
});

router.use("/users", usersRouter);
router.use("/profiles", profilesRouter);
router.use("/workouts", workoutsRouter);

export default router;
