import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => res.send("Stats list"));

export { router as statsRoutes };
