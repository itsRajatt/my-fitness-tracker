import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => res.send("User list"));

export { router as userRoutes };
