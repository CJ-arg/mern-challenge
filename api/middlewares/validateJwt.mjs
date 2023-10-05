import { response } from "express";

export const validateJwt = (req, res, next) => {
  const token = req.header("x-token");
  console.log(token);
  next();
};
