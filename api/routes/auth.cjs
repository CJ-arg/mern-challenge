// Rutas de Usuarios / Auth
// http://localhost:4000 + /api/auth

const {Router} = require('express');
const { createUser, loginUser , renewToken} = require('../controllers/auth.cjs');
const router = Router()

router.post("/new", createUser)
router.post("/", loginUser);
router.post("/renew", renewToken);

module.exports = router 