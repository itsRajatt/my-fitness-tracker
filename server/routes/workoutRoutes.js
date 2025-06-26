import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => res.send("Workout list"));

export { router as workoutRoutes };
