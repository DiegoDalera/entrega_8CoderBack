import mongoose from "mongoose";

const urlDb = "mongodb+srv://dmdalera:67FK6GzB7QpFUHCo@cluster0.3s4bhly.mongodb.net/";

export const connectMongoDB = async () => {
  try {
    // Conexión con la base de datos
    mongoose.connect(urlDb);
    console.log("Mongo DB Conectado");
  } catch (error) {
    console.log(error);
  }
};

