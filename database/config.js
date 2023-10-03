import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {});
    console.log("DB on line");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar la base de Datos");
  }
};
module.exports = {
  dbConnection,
};
