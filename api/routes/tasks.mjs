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

router.use(validateJwt);
// Tasks with token

router.get("/", getTasks);

router.post("/", createTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);

export default router;
