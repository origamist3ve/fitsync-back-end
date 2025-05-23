import db from "./db/connection.js";
import express from "express"; 
import routes from "./routes/index.js";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import workoutsRouter from "./routes/workouts.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

//sets up original route
app.use("/api", routes);

app.use("/workout", workoutsRouter);

db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));

    app.listen(PORT, () => {
        console.log(`Express server running on port: ${PORT}`);
    });
});