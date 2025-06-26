import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import * as routes from "./routes/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", routes.userRoutes);
app.use("/api/exercises", routes.exerciseRoutes);
app.use("/api/workouts", routes.workoutRoutes);
app.use("/api/stats", routes.statsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error(err));
