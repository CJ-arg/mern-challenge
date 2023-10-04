import { response } from "express";
import User from "../models/User.js";

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;
  try {
    const user = new User(req.body);

    await user.save();

    if (name.length < 3) {
      return res
        .status(400)
        .json({ ok: false, msg: "Name must be al least 3 characters" });
    }
    res.status(201).json({ ok: true, msg: "register", name, email, password });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, msg: "Error please contact administrator" });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({ ok: true, msg: "login", email, password });
};

const renewToken = (req, res = response) => {
  res.json({ ok: true, msg: "renew" });
};

export { createUser, loginUser, renewToken };
