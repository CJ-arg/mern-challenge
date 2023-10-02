// Rutas de Usuarios / Auth
// http://localhost:4000 + /api/auth

const {Router} = require('express');
const router = Router()

router.post("/new", (req, res) => {
  res.json({ ok: true , msg: 'register' });
});
router.post("/", (req, res) => {
  res.json({ ok: true , msg: 'login'});
});
router.post("/renew", (req, res) => {
  res.json({ ok: true, msg: 'renew' });
});

module.exports = router 