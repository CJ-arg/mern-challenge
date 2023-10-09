import { dbConnection } from "../database/config.mjs";
import express from "express";
import authRoutes from "./routes/auth.mjs";
import tasksRoutes from "./routes/tasks.mjs";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
//data base
dbConnection();
//cors
app.use(cors());
// public directory
app.use(express.static("../"));
// lectura parse BODY
app.use(express.text());
app.use(express.json());
// Rutes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
