import jwt from "jsonwebtoken";

const generateJwt = (uid, nickname) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, nickname };
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
