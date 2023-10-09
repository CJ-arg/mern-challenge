// /api/tasks"  tasksRoutes

import { Router } from "express";
// import { createUser, loginUser, renewToken } from "../controllers/auth.mjs";
import { validateJwt } from "../middlewares/validateJwt.mjs";

const router = Router();

// Tasks with token

router.get("/", controller);

router.post("/", createcontroller);

router.put("/:id", editcontroller);

router.delete("/:id", deletecontroller);
