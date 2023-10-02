// Rutas de Usuarios / Auth
// http://localhost:4000 + /api/auth

const {Router} = require('express');
const router = Router()

router.get("/", (req, res) => {
  res.json({ ok: true });
});

module.exports = router 