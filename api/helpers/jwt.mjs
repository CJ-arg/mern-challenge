import jwt from "jsonwebtoken";

const generateJwt = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      { expiresIn: "48h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("TOKEN not generated");
        }
        resolve(token);
      }
    );
  });
};

export { generateJwt };
