// /api/tasks"  tasksRoutes

import { Router } from "express";
import {
  getTasks,
  createTask,
  editTask,
  deleteTask,
} from "../controllers/tasks.mjs";
import { validateJwt } from "../middlewares/validateJwt.mjs";

const router = Router();

// Tasks with token

router.get("/", validateJwt, getTasks);

router.post("/", validateJwt, createTask);

router.put("/:id", validateJwt, editTask);

router.delete("/:id", validateJwt, deleteTask);

export default router;
