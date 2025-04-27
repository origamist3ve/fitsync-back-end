import Workout from "../models/workout.js";
import User from "../models/user.js";

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().populate("user", "username").populate("comments.author", "username");
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId).populate(
      "user",
      "username"
    );
    console.log(req.params.workoutId);

    if (!workout) {
      return res.status(404).json({ err: "Workout not found " });
    }
    res.json(workout);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const createWorkout = async (req, res) => {
  try {
    console.log("Sup");
    const userId = req.user._id;
    const { workoutType, workout, duration, date, sets } = req.body;

    const newWorkout = new Workout({
      user: userId,
      workoutType,
      workout,
      duration,
      date,
      sets,
    });

    const savedWorkout = await newWorkout.save();
    await User.findByIdAndUpdate(userId, {
      $push: { workout: savedWorkout._id },
    });
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);

    if (!workout) return res.status(404).json({ err: "Workout not found" });
    if (String(workout.user) !== req.user._id) {
      return res.status(403).json({ err: "Not authorized" });
    }

    workout.workoutType = req.body.workoutType || workout.workoutType;
    workout.workout = req.body.workout || workout.workout;
    workout.duration = req.body.duration || workout.duration;
    workout.sets = req.body.sets || workout.sets;
    workout.date = req.body.date || workout.date;

    await workout.save();

    res.json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    if (!workout) return res.status(404).json({ err: "Workout not found" });
    if (String(workout.user) !== req.user._id) {
      return res.status(403).json({ err: "Not authorized" });
    }

    await workout.deleteOne();
    res.json({ message: "Workout deleted" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const workoutId = req.params.workoutId;
    const { text } = req.body;
    const userId = req.user._id;

    if (!text) {
      return res.status(400).json({ err: "Comment text is required" });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      workoutId,
      {
        $push: {
          comments: {
            text,
            author: userId,
          },
        },
      },

      { new: true }
    ).populate("comments.author", "username");

    res.json(updatedWorkout.comments);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
