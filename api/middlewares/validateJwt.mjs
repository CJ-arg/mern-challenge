import { response } from "express";
import jwt from "jsonwebtoken";

export const validateJwt = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No token",
    });
  }
  try {
    const { uid, nickname } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.nickname = nickname;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "No valid token",
    });
  }
  next();
};
