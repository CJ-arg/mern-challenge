import { dbConnection } from "../database/config.mjs";
import express from "express";
import authRoutes from "./routes/auth.mjs";
import dotenv from "dotenv";
dotenv.config();
const app = express();
dbConnection();
// public directory
app.use(express.static("../"));

// lectura parse BODY
app.use(express.text());
app.use(express.json());
// Rutes
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});