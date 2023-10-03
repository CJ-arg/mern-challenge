// Rutas de Usuarios / Auth
// http://localhost:4000 + /api/auth

import { Router } from "express";
import { createUser, loginUser, renewToken } from "../controllers/auth.mjs";

const router = Router();

router.post("/new", createUser);
router.post("/", loginUser);
router.post("/renew", renewToken);

export default router;
