import { response } from "express";

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;
  if (name.length < 3) {
    return res
      .status(400)
      .json({ ok: false, msg: "Name must be al least 3 characters" });
  }
  res.json({ ok: true, msg: "register", name, email, password });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({ ok: true, msg: "login", email, password });
};

const renewToken = (req, res = response) => {
  res.json({ ok: true, msg: "renew" });
};

export { createUser, loginUser, renewToken };