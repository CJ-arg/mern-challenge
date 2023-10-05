import { response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateJwt } from "../helpers/jwt.mjs";

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User already exists",
      });
    }
    user = new User(req.body);
    //encriptado password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    const token = await generateJwt(user.id, user.name);
    if (name.length < 3) {
      return res
        .status(400)
        .json({ ok: false, msg: "Name must be al least 3 characters" });
    }
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, msg: "Error please contact administrator" });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User mail doesen`t  exists",
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Invalid Password",
      });
    }
    const token = await generateJwt(user.id, user.name);
    res.json({ ok: true, uid: user.id, name: user.name, token });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, msg: "Error please contact administrator" });
  }
};

const renewToken = async (req, res = response) => {
  const { uid, name } = req;
  const token = await generateJwt(uid, name);
  res.json({ ok: true, token, uid, name });
};

export { createUser, loginUser, renewToken };
