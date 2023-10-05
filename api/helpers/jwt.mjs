import jwt from "jsonwebtoken";

const generateJwt = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(payload, SECRET_JWT_SEED);
  });
};

export { generateJwt };
